const faker = require("faker");

const db = require("../config/connnection.js");
const { Meetup, User } = require("../models");

db.once("open", async () => {
  await Meetup.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create metups
  let createdMeetups = [];
  for (let i = 0; i < 100; i += 1) {
    const meetupText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdMeetup = await Meetup.create({ meetupText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { meetups: createdMeetup._id } }
    );

    createdMeetups.push(createdMeetup);
  }

  console.log("all done!");
  process.exit(0);
});
