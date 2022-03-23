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
    savedRestaurants: [Restaurant]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Restaurant {
    restaurantID: String!
    language: String!
    limit: String!
    currency: String!
    locationID: String!
  }

  input SavedRestaurantInput {
    restaurantId: String
    language: String
    limit: String
    currency: String
    locationID: String
    
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMeetup(meetupText: String!): Meetup
    saveRestaurant(input: SavedRestaurantInput): User
    removeRestaurant(restaurantID: String!): User
  }
`;


module.exports = typeDefs;