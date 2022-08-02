import Auth from "components/Auth";
import React, { useState } from "react";
import styled from "styled-components";

type Mode = "logIn" | "signUp"

export default () => {
    // const [isRegistered, setIsRegistered] = useState(true);
    const [mode, setMode] = useState<Mode>("logIn")

    return (
        <StyledAuthScreenContainer>
            <StyledAuthContainer>
                <Auth mode={mode} setMode={setMode}></Auth>
            </StyledAuthContainer>
        </StyledAuthScreenContainer>)
}

const StyledAuthContainer = styled.div`
    margin-top: 8vh;
    display: flex;
    min-height: 50vh;
    max-width: 30rem;
    flex-flow: row wrap;
    gap: 2rem;
    justify-content: center;
    span{
        display: flex;
        padding: 1rem;
    }
    >*{
        max-height: 20rem;
        flex: 1 0 45%;
        max-width: 20rem;
        min-width:  5rem;
    }
    background: ${({ theme })=> theme.colors.background1};
    border-radius: 10px;

`


const StyledAuthScreenContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-self: center;
    padding-top: 7vmin;
    height: 100vh;
    background: ${({ theme })=> theme.colors.primary3};
    >*{
        width: 100%;
    }
`