import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
  mutation addMeetup($input: addMeetupInput) {
    addMeetup(input: $input) {
      _id
      username
      title
      body
      image
    }
  }
`;

export const EDIT_MEETUPS = gql`
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

export const DELETE_MEETUPS = gql`
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