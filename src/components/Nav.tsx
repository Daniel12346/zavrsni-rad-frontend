import { useMeQuery } from "graphql/types";
import React from "react";
import styled from "styled-components";

export default () => {
    const { data } = useMeQuery();
    return (<StyledNav>
        <img src={""} alt={"My profile"}></img>
        <StyledInput placeholder="Search people, places..."></StyledInput>
        <span>icon 1</span>
        <span>icon 2</span>
    </StyledNav>)
}

const StyledNav = styled.nav`
    background: white;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    min-height: 3rem;
    box-shadow: ${({ theme }) => theme.shadows.base};
    padding: 0.2rem;

`
const StyledInput = styled.input`
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.primary1};
    padding: 0.4rem;
    min-width: 50;
    max-width: 20rem;
    order: 2;
    margin: 0.5rem 0;

    @media(min-width: 500px){
        order: 0;
    }

    ::placeholder{
        color: ${({ theme }) => theme.colors.text3};
    }

`