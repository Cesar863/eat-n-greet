import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
        _id
      username
    }
  }
`;

export const MEETUPS = gql`
query meetups($username: String) {
  meetups(username: $username) {
    _id
    body
    createdAt
    username
    title
  }
}
`;