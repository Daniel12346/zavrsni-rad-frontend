import React from "react";
import { useFollowUserMutation, User, useUsersQuery } from "graphql/types"
import Nav from "components/Nav";
import ScreenContentContainer from "components/ScreenContentContainer";
import StyledUserInfo from "components/StyledUserInfo";
import StyledProfileImage from "components/StyledProfileImage";
import styled from "styled-components";
import { useMe } from "components/hooks/me";
import UserFollowOptions from "components/styled/UserFollowOptions";
import UserList from "components/UserList";

export default () => {
    const { data, loading: loadingUsers } = useUsersQuery();
    const [followUser, { loading, error }] = useFollowUserMutation();
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer>
            {error && console.log(error)}
            <StyledListName>USERS</StyledListName>
            <UserList users={(data?.users?.filter(user=>user && me && user.id !== me.id)) as User[] ?? []}/>
        </ScreenContentContainer>
    </>
}


const StyledListName = styled.span`
    color: ${({ theme }) => theme.colors.text3};
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 0.6rem
`