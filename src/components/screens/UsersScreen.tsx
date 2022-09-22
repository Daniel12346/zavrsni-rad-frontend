import React from "react";
import { useFollowUserMutation, User, useUsersQuery } from "graphql/types"
import Nav from "components/Nav";
import ScreenContentContainer from "components/ScreenContentContainer";
import styled from "styled-components";
import { useMe } from "components/hooks/me";
import UserList from "components/UserList";

export default () => {
    const { data, loading: loadingUsers } = useUsersQuery();
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer>
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