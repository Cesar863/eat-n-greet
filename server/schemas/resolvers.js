const { AuthenticationError } = require("apollo-server-errors");
const { User, Meetup } = require("../models");
const { countDocuments } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    meetups: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Meetup.find(params).sort({ createdAt: -1 });
    },

    meetup: async (parent, { _id }) => {
      return Meetup.findOne({ _id });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addMeetup: async (parent, args, context) => {
      if (context.user) {
        const meetup = await Meetup.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { meetups: meetup._id } },
          { new: true }
        );

        return meetup;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    editMeetup: async (parent, args, context) => {
      if (context.user) {
        const updatedMeetup = await Meetup.findOneAndUpdate({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { meetups: meetup._id } },
          { new: true }
        );
        return updatedMeetup;
      }
    },

    removeMeetup: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedMeetups: { meetupId: args.meetupId } } },
          { new: true }
        );
        console.log(updatedUser);
        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // deleteMeetup: async(parent, user)

    // saveRestaurant: async (parent, { input }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { savedRestaurants: input } },
    //       { new: true, runValidators: true }
    //     );
    //     return updatedUser;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    //   removeRestaurant: async (parent, { restaurantId }, context) => {
    //     if (context.user) {
    //       const updatedUser = await User.findOneAndUpdate(
    //         { _id: context.user._id },
    //         { $pull: { savedRestaurants: { restaurantId: restaurantId } } },
    //         { new: true }
    //       );
    //       return updatedUser;
    //     }
    //     throw new AuthenticationError("You need to be logged in!");
    //   },
  },
};

module.exports = resolvers;
