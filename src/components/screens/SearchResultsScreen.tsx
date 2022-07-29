import Nav from "components/Nav";
import PostList from "components/PostList";
import ScreenContentContainer from "components/ScreenContentContainer";
import UserList from "components/UserList";
import { Post, usePostsByKeyQuery, User, useUsersByKeyQuery } from "graphql/types";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default ()=>{
    const {searchkey:key} = useParams();
    console.log(key);
    const {data:usersData} = useUsersByKeyQuery({variables:{key}});
    const {data:postsData} = usePostsByKeyQuery({variables:{key}});

    usersData?.usersByKey && console.log(usersData.usersByKey);
    postsData?.postsByKey && console.log(postsData.postsByKey);
    return <>
    <Nav/>
    <StyledScreenContainer>
        <StyledListHeading>USERS</StyledListHeading>
        <UserList users={usersData?.usersByKey as User[] ?? null}></UserList>
        <StyledListHeading>POSTS</StyledListHeading>
        <PostList posts={postsData?.postsByKey as Post[] ?? null}></PostList>
    </StyledScreenContainer>
    </>
}

const StyledScreenContainer = styled(ScreenContentContainer)`
    >*{
        max-width: 40rem;
    }
    gap: 1rem;
`
const StyledListHeading = styled.span`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text3};
    margin-right: 30%;
`



