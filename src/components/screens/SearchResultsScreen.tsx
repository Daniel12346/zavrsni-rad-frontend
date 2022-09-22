import CreatePostButton from "components/CreatePostButton";
import { useMe } from "components/hooks/me";
import Nav from "components/Nav";
import RestrictedPostList from "components/RestrictedPostList";
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
    const {me} = useMe();

    usersData?.usersByKey && console.log(usersData.usersByKey);
    postsData?.postsByKey && console.log(postsData.postsByKey);
    return <>
    <Nav/>
    <StyledScreenContainer backgroundUrl={me?.backgroundImageUrl ?? undefined}>
        <StyledListHeading>USERS</StyledListHeading>
        <UserList users={usersData?.usersByKey as User[] ?? null}></UserList>
        <StyledListHeading>POSTS</StyledListHeading>
        <RestrictedPostList posts={postsData?.postsByKey as Post[] ?? null}></RestrictedPostList>
        <CreatePostButton />
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



