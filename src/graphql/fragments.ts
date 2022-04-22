import { gql } from "@apollo/client";

export const UserInfo = gql`
  fragment UserInfo on User {
    firstName
    lastName
    id
    profileImageUrl
  }
`;

