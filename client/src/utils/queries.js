import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;


export const ADD_MEETUPS = gql`
  mutation addMeetups($input: addMeetupInput) {
    addMeetups(input: $input) {
      _id
      username
      title
      body
      image
    }
  }
`;



export const SAVE_RESTAURANT = gql`
  mutation saveRestaurant($input: SavedRestaurantInput) {
    saveRestaurant(input: $input) {
      _id
      username
      restaurantCount
      savedRestaurants {
        restaurantId
        language
        limit
        location_id
        currency
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($input: AddCommentInput) {
    addComment(input: $input) {
      _id
      username
      
    }
  }`


export const REMOVE_RESTAURANT = gql`
  mutation removeRestaurant($restaurantId: String!) {
    removeRestaurant(restaurantId: $restaurantId) {
      _id
      username
      restaurantCount
      savedRestaurants {
        restaurantId
        language
        limit
        location_id
        currency
      }
    }
  }
`;