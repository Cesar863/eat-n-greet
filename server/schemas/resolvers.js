const { User, Meetup } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({})
            .select("-__v -password")
            .populate("meetups")
            
  
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
      // get all meetups
      meetups: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Meetup.find(params).sort({ createdAt: -1 });
      },
      // get one meetup by id
      meetup: async (parent, { _id }) => {
        return Meetup.findOne({ _id });
      },
  
      // get all users
      users: async () => {
        return User.find()
          .select("-__v -password")
          .populate("meetups");
      },
  
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select("-__v -password")
          .populate("meetups");
      },
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
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
    },
  };
  
  module.exports = resolvers;