import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type MessageInput = {
  content?: InputMaybe<Scalars['String']>;
  receiverId?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  deleteUser?: Maybe<MutationResult>;
  followUser?: Maybe<MutationResult>;
  logIn?: Maybe<Scalars['String']>;
  stopFollowingUser?: Maybe<MutationResult>;
  uploadImage?: Maybe<MutationResult>;
  uploadPostImage?: Maybe<MutationResult>;
  uploadPostImages?: Maybe<MutationResult>;
};


export type MutationCreatePostArgs = {
  additionalImageFiles?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  mainImageFile?: InputMaybe<Scalars['Upload']>;
  restrictedTo?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationFollowUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationLogInArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationStopFollowingUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload'];
  purpose?: InputMaybe<Scalars['String']>;
};


export type MutationUploadPostImageArgs = {
  file: Scalars['Upload'];
  postId: Scalars['ID'];
  purpose: Scalars['String'];
};


export type MutationUploadPostImagesArgs = {
  files: Array<InputMaybe<Scalars['Upload']>>;
  postId: Scalars['ID'];
};

export type MutationResult = {
  __typename?: 'MutationResult';
  success?: Maybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  imageUrls: Array<Maybe<Scalars['String']>>;
  mainImageUrl?: Maybe<Scalars['String']>;
  restrictedTo?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  postsByKey?: Maybe<Array<Maybe<Post>>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersByKey?: Maybe<Array<Maybe<User>>>;
  viewablePosts?: Maybe<Array<Maybe<Post>>>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryPostsByKeyArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersByKeyArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryViewablePostsArgs = {
  showPublicPosts?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  backgroundImageUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  followers: Array<Maybe<User>>;
  following: Array<Maybe<User>>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  posts: Array<Maybe<Post>>;
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserInfoFragment = { __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null };

export type PostInfoFragment = { __typename?: 'Post', id: string, createdAt: any, mainImageUrl?: string | null, title?: string | null, text?: string | null, imageUrls: Array<string | null>, restrictedTo?: string | null, author: { __typename?: 'User', id: string, firstName: string, lastName: string, profileImageUrl?: string | null } };

export type LogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn?: string | null };

export type SignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } };

export type UploadImageMutationVariables = Exact<{
  file: Scalars['Upload'];
  purpose?: InputMaybe<Scalars['String']>;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage?: { __typename?: 'MutationResult', success?: boolean | null } | null };

export type CreatePostMutationVariables = Exact<{
  mainImageFile?: InputMaybe<Scalars['Upload']>;
  additionalImageFiles?: InputMaybe<Array<InputMaybe<Scalars['Upload']>> | InputMaybe<Scalars['Upload']>>;
  title?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  restrictedTo?: InputMaybe<Scalars['String']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, createdAt: any, mainImageUrl?: string | null, title?: string | null, text?: string | null, imageUrls: Array<string | null>, restrictedTo?: string | null, author: { __typename?: 'User', id: string, firstName: string, lastName: string, profileImageUrl?: string | null } } };

export type FollowUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: { __typename?: 'MutationResult', success?: boolean | null } | null };

export type StopFollowingUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type StopFollowingUserMutation = { __typename?: 'Mutation', stopFollowingUser?: { __typename?: 'MutationResult', success?: boolean | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null, posts: Array<{ __typename?: 'Post', mainImageUrl?: string | null, imageUrls: Array<string | null>, title?: string | null, text?: string | null, createdAt: any, id: string } | null>, followers: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null>, following: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null> } | null };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null, posts: Array<{ __typename?: 'Post', mainImageUrl?: string | null, imageUrls: Array<string | null>, title?: string | null, text?: string | null, createdAt: any, restrictedTo?: string | null } | null>, followers: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null>, following: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null> } | null };

export type UsersByKeyQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type UsersByKeyQuery = { __typename?: 'Query', usersByKey?: Array<{ __typename?: 'User', firstName: string, lastName: string, id: string, profileImageUrl?: string | null, backgroundImageUrl?: string | null } | null> | null };

export type PostsByKeyQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']>;
}>;


export type PostsByKeyQuery = { __typename?: 'Query', postsByKey?: Array<{ __typename?: 'Post', id: string, createdAt: any, mainImageUrl?: string | null, title?: string | null, text?: string | null, imageUrls: Array<string | null>, restrictedTo?: string | null, author: { __typename?: 'User', id: string, firstName: string, lastName: string, profileImageUrl?: string | null } } | null> | null };

export type ViewablePostsQueryVariables = Exact<{
  showPublicPosts?: InputMaybe<Scalars['Boolean']>;
}>;


export type ViewablePostsQuery = { __typename?: 'Query', viewablePosts?: Array<{ __typename?: 'Post', id: string, createdAt: any, mainImageUrl?: string | null, title?: string | null, text?: string | null, imageUrls: Array<string | null>, restrictedTo?: string | null, author: { __typename?: 'User', id: string, firstName: string, lastName: string, profileImageUrl?: string | null } } | null> | null };

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  firstName
  lastName
  id
  profileImageUrl
  backgroundImageUrl
}
    `;
export const PostInfoFragmentDoc = gql`
    fragment PostInfo on Post {
  id
  author {
    id
    firstName
    lastName
    profileImageUrl
  }
  createdAt
  mainImageUrl
  title
  text
  imageUrls
  restrictedTo
}
    `;
export const LogInDocument = gql`
    mutation logIn($email: String!, $password: String!) {
  logIn(email: $email, password: $password)
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  createUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UploadImageDocument = gql`
    mutation uploadImage($file: Upload!, $purpose: String) {
  uploadImage(file: $file, purpose: $purpose) {
    success
  }
}
    `;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *      purpose: // value for 'purpose'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($mainImageFile: Upload, $additionalImageFiles: [Upload], $title: String, $text: String, $restrictedTo: String) {
  createPost(
    mainImageFile: $mainImageFile
    additionalImageFiles: $additionalImageFiles
    title: $title
    text: $text
    restrictedTo: $restrictedTo
  ) {
    ...PostInfo
  }
}
    ${PostInfoFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      mainImageFile: // value for 'mainImageFile'
 *      additionalImageFiles: // value for 'additionalImageFiles'
 *      title: // value for 'title'
 *      text: // value for 'text'
 *      restrictedTo: // value for 'restrictedTo'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const FollowUserDocument = gql`
    mutation followUser($id: ID) {
  followUser(id: $id) {
    success
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const StopFollowingUserDocument = gql`
    mutation stopFollowingUser($id: ID) {
  stopFollowingUser(id: $id) {
    success
  }
}
    `;
export type StopFollowingUserMutationFn = Apollo.MutationFunction<StopFollowingUserMutation, StopFollowingUserMutationVariables>;

/**
 * __useStopFollowingUserMutation__
 *
 * To run a mutation, you first call `useStopFollowingUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopFollowingUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopFollowingUserMutation, { data, loading, error }] = useStopFollowingUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStopFollowingUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StopFollowingUserMutation, StopFollowingUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<StopFollowingUserMutation, StopFollowingUserMutationVariables>(StopFollowingUserDocument, options);
      }
export type StopFollowingUserMutationHookResult = ReturnType<typeof useStopFollowingUserMutation>;
export type StopFollowingUserMutationResult = Apollo.MutationResult<StopFollowingUserMutation>;
export type StopFollowingUserMutationOptions = Apollo.BaseMutationOptions<StopFollowingUserMutation, StopFollowingUserMutationVariables>;
export const UsersDocument = gql`
    query users {
  users {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...UserInfo
    posts {
      mainImageUrl
      imageUrls
      title
      text
      createdAt
      id
    }
    followers {
      ...UserInfo
    }
    following {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query user($id: String) {
  user(id: $id) {
    ...UserInfo
    posts {
      mainImageUrl
      imageUrls
      title
      text
      createdAt
      restrictedTo
    }
    followers {
      ...UserInfo
    }
    following {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersByKeyDocument = gql`
    query usersByKey($key: String) {
  usersByKey(key: $key) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useUsersByKeyQuery__
 *
 * To run a query within a React component, call `useUsersByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersByKeyQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useUsersByKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersByKeyQuery, UsersByKeyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersByKeyQuery, UsersByKeyQueryVariables>(UsersByKeyDocument, options);
      }
export function useUsersByKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersByKeyQuery, UsersByKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersByKeyQuery, UsersByKeyQueryVariables>(UsersByKeyDocument, options);
        }
export type UsersByKeyQueryHookResult = ReturnType<typeof useUsersByKeyQuery>;
export type UsersByKeyLazyQueryHookResult = ReturnType<typeof useUsersByKeyLazyQuery>;
export type UsersByKeyQueryResult = Apollo.QueryResult<UsersByKeyQuery, UsersByKeyQueryVariables>;
export const PostsByKeyDocument = gql`
    query postsByKey($key: String) {
  postsByKey(key: $key) {
    ...PostInfo
  }
}
    ${PostInfoFragmentDoc}`;

/**
 * __usePostsByKeyQuery__
 *
 * To run a query within a React component, call `usePostsByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByKeyQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function usePostsByKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsByKeyQuery, PostsByKeyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PostsByKeyQuery, PostsByKeyQueryVariables>(PostsByKeyDocument, options);
      }
export function usePostsByKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsByKeyQuery, PostsByKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PostsByKeyQuery, PostsByKeyQueryVariables>(PostsByKeyDocument, options);
        }
export type PostsByKeyQueryHookResult = ReturnType<typeof usePostsByKeyQuery>;
export type PostsByKeyLazyQueryHookResult = ReturnType<typeof usePostsByKeyLazyQuery>;
export type PostsByKeyQueryResult = Apollo.QueryResult<PostsByKeyQuery, PostsByKeyQueryVariables>;
export const ViewablePostsDocument = gql`
    query viewablePosts($showPublicPosts: Boolean) {
  viewablePosts(showPublicPosts: $showPublicPosts) {
    ...PostInfo
  }
}
    ${PostInfoFragmentDoc}`;

/**
 * __useViewablePostsQuery__
 *
 * To run a query within a React component, call `useViewablePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewablePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewablePostsQuery({
 *   variables: {
 *      showPublicPosts: // value for 'showPublicPosts'
 *   },
 * });
 */
export function useViewablePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewablePostsQuery, ViewablePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ViewablePostsQuery, ViewablePostsQueryVariables>(ViewablePostsDocument, options);
      }
export function useViewablePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewablePostsQuery, ViewablePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ViewablePostsQuery, ViewablePostsQueryVariables>(ViewablePostsDocument, options);
        }
export type ViewablePostsQueryHookResult = ReturnType<typeof useViewablePostsQuery>;
export type ViewablePostsLazyQueryHookResult = ReturnType<typeof useViewablePostsLazyQuery>;
export type ViewablePostsQueryResult = Apollo.QueryResult<ViewablePostsQuery, ViewablePostsQueryVariables>;