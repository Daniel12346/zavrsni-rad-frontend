import { gql } from "@apollo/client";
import { UserInfo } from "./fragments";

export const USERS_QUERY = gql`
  query users {
    users {
      ...UserInfo
    }
  }
  ${UserInfo}
`;

export const ME_QUERY = gql`
  query me {
    me {
      ...UserInfo
    }
  }
  ${UserInfo}
`;

export const USER_QUERY = gql`
  query user($id:String){
    user(id:$id){
      ...UserInfo
    }
  }
`