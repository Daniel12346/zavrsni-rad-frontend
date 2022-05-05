import { gql } from "@apollo/client";

export const UserInfo = gql`
  fragment UserInfo on User {
    firstName
    lastName
    id
    profileImageUrl
    backgroundImageUrl
  }
`;

export const PostInfo = gql`
  fragment PostInfo on Post{
    id
    author{
      id
      firstName
      lastName
    }
    createdAt
    mainImageUrl
    title
    text
    imageUrls
  }
`