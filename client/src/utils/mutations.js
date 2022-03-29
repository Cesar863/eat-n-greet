import { gql } from "@apollo/client";

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
mutation addMeetup($body: String!, $title: String!) {
  addMeetup(body: $body, title: $title) {
    _id
    body
    createdAt
    username
    title
  }
}
`;

export const EDIT_MEETUPS = gql`
mutation editMeetup($id: ID!, $body: String!, $title: String!) {
  editMeetup(_id: $id, body: $body, title: $title) {
    _id
    title
    body
    createdAt
    username
  }
}
`;

export const DELETE_MEETUPS = gql`
mutation deleteMeetup($id: ID!) {
  deleteMeetup(_id: $id) {
    _id
    username
    email
  }
}
`;