const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Meetup {
    MeetupID: String!
    language: String!
    limit: String!
    currency: String!
    locationID: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    Meetup: [Meetup]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    meetups(username: String): [Meetup]
    meetup(_id: ID!): Meetup
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMeetup(meetupText: String!): Meetup
    editMeetup(meetupText: String!): Meetup
    removeMeetup(meetupID: String!): Meetup
  }
`;

module.exports = typeDefs;
