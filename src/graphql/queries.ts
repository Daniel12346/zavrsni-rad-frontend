import { gql } from "@apollo/client";
import { UserInfo, PostInfo } from "./fragments";

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
      posts{
        mainImageUrl
        imageUrls 
        title
        text              
      }
      followers{
        ...UserInfo
      }
      following{
        ...UserInfo
      }
    }
  }
  ${UserInfo}

`;

export const USER_QUERY = gql`
  query user($id: String){
    user(id:$id){
      ...UserInfo
    }
  }
  ${UserInfo}

`

export const USERS_BY_KEY_QUERY = gql`
  query usersByKey($key: String){
    usersByKey(key:$key){
      ...UserInfo
    }
  }
  ${UserInfo}
`
export const POSTS_BY_KEY_QUERY = gql`
  query postsByKey($key: String){
    postsByKey(key:$key){
      ...PostInfo
    }
  }
  ${PostInfo}
`