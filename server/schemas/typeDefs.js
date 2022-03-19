const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Meetup {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    meetups: [Meetup]
    
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    meetups(username: String): [Meetup]
    meetup(_id: ID!): Meetup
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMeetup(meetupText: String!): Meetup
  }

  type Auth {
    token: ID!
    user: User
  }
`;


module.exports = typeDefs;