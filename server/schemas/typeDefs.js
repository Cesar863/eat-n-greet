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
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRestaurant(input: SavedRestaurantInput): User
    removeRestaurant(restaurantID: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMeetup(meetupText: String!): User
    editMeetup(meetupText: String!): User
    removeMeetup(meetupID: String!): User
    
  }
`;



module.exports = typeDefs;