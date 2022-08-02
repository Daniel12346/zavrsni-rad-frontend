import React from "react";
import { useMe } from "components/hooks/me";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"


export default () => {
    const { me, logOut } = useMe();
    const navigate = useNavigate();

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
            <StyledSettings>
                <StyledLogoutButton onClick={async () =>{
                   await logOut();
                   navigate("/auth");
                    }}>log out</StyledLogoutButton>
          </StyledSettings>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}

const StyledSettings = styled.div`
    background: ${({ theme })=> theme.colors.background1};
    width: 90%;
    max-width: 25rem;
    padding: 1rem;
    
`
const StyledLogoutButton = styled.button`
    background: none;
    border: 2px red solid;
    padding: 0.3rem;
    color: red;
    border-radius: 4px;
`