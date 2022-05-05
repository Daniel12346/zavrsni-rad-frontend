import { gql } from "@apollo/client";
import { PostInfo, UserInfo } from "./fragments";

export const LOGIN_MUTATION = gql`
  mutation logIn($email: String!, $password: String!) {
    #returns a jwt (string)
    #todo: refactor auth data (return user data)
    logIn(email: $email, password: $password)
  }
`;
/*
export const LOGOUT_MUTATION = gql`
  mutation {
    logOut {
      success
    }
  }
`;
*/
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
  mutation createPost($mainImageFile: Upload, $additionalImageFiles: [Upload], $title: String, $text: String){
    createPost(mainImageFile:$mainImageFile, additionalImageFiles:$additionalImageFiles, title:$title, text:$text){
      ...PostInfo
    }
  }
  ${PostInfo}
`

