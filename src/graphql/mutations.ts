import { gql } from "@apollo/client";
import { PostInfo, UserInfo } from "./fragments";

export const LOGIN_MUTATION = gql`
  mutation logIn($email: String!, $password: String!) {
    #returns a jwt (string)
    logIn(email: $email, password: $password)
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      ...UserInfo
    }
  }
  ${UserInfo}
`;



export const UPLOAD_IMAGE_MUTATION = gql`
  mutation uploadImage($file: Upload!, $purpose: String){
    uploadImage(file: $file, purpose: $purpose){
      success
    }
  }
`


export const CREATE_POST_MUTATTION = gql`
  mutation createPost($mainImageFile: Upload, $additionalImageFiles: [Upload], $title: String, $text: String, $restrictedTo: String){
    createPost(mainImageFile:$mainImageFile, additionalImageFiles:$additionalImageFiles, title:$title, text:$text, restrictedTo:$restrictedTo){
      ...PostInfo
    }
  }
  ${PostInfo}
`

export const FOLLOW_USER_MUTATION = gql`
  mutation followUser($id: ID){
    followUser(id: $id){
      success
    }
  }
`