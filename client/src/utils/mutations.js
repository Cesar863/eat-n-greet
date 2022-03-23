import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
        _id
      username
      addMeetups
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







