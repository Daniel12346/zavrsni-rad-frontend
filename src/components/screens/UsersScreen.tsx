import React from "react";
import { useFollowUserMutation, User, useUsersQuery } from "graphql/types"
import Nav from "components/Nav";
import ScreenContentContainer from "components/ScreenContentContainer";
import StyledUserInfo from "components/StyledUserInfo";
import StyledProfileImage from "components/StyledProfileImage";
import styled from "styled-components";
import { useMe } from "components/hooks/me";
import UserFollowOptions from "components/styled/UserFollowOptions";

export default () => {
    const { data, loading: loadingUsers } = useUsersQuery();
    const [followUser, { loading, error }] = useFollowUserMutation();
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer>
            {error && console.log(error)}
            <StyledListName>USERS</StyledListName>
            <StyledUserList>{data?.users?.map(user => user && user.id !== me?.id &&
                <li key={user.id}>
                    <StyledUserInfo>
                        <StyledProfileImage src={user.profileImageUrl || ""} />
                        <span className="userName">{user.firstName} {user.lastName}</span>
                        <UserFollowOptions user={user as User} />
                    </StyledUserInfo>
                </li>
            )}
            </StyledUserList>
        </ScreenContentContainer>
    </>
}

const StyledUserList = styled.ul`
    width: 95%;
    max-width: 40rem;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.postBg1};
    padding: 1rem;

    >li{
        width: 95%;
        overflow-y: hidden;
        display: flex;
        justify-content: center;

       
    }
`

const StyledListName = styled.span`
    color: ${({ theme }) => theme.colors.text3};
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 0.6rem
`