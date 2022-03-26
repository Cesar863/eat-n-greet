const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Meetup {
    _id: ID
    body: String!
    createdAt: String!
    username: String!
    title: String!
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
    addMeetup(body: String!, title:String!): Meetup
    editMeetup(_id: ID!, body: String!, title: String!): Meetup
    deleteMeetup(_id: ID!): User
  }
`;

module.exports = typeDefs;
