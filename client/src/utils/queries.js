import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
        _id
      username
      restaurantCount
      savedRestaurants {
        restaurantId
        image
        link
        language
        limit
        location_id
        currency
      }
      }
    }
  }
`;