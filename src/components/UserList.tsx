import React from "react";
import { Maybe, User } from "graphql/types";
import StyledUserInfo from "components/StyledUserInfo";
import StyledProfileImage from "components/StyledProfileImage";
import UserFollowOptions from "components/styled/UserFollowOptions";
import styled from "styled-components";

interface Props {
    users: Maybe<User[]>;
}
export default ({ users }: Props) => <StyledUserList>{users?.map(user => user &&
    <li key={user.id}>
        <StyledUserInfo>
            <StyledProfileImage src={user.profileImageUrl || ""} />
            <span className="userName">{user.firstName} {user.lastName}</span>
            <UserFollowOptions user={user as User} />
        </StyledUserInfo>
    </li>
)}
</StyledUserList>;


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
