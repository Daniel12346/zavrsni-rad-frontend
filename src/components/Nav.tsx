import { useMeQuery } from "graphql/types";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledProfileImage from "./StyledProfileImage";
import { ReactComponent as NotificationsIcon } from "images/bell-svgrepo-com.svg"
import { ReactComponent as SettingsIcon } from "images/settings-svgrepo-com.svg"
import { StyledLink } from "./StyledLink";


export default () => {
    const { data } = useMeQuery();
    const navigate = useNavigate();
    const handleSearch = (e:any)=>{
        e?.target?.value && navigate(`/search/${e?.target?.value}`)
    }
    return (<StyledNav>
        <StyledLink to="/me">
            <StyledProfileImage src={data?.me?.profileImageUrl ?? ""} alt={"My profile"}></StyledProfileImage>
            <span>{data?.me?.firstName}</span>
        </StyledLink>
        <StyledInput onChange={handleSearch} placeholder="Search people and posts"></StyledInput>
        {/* <span className="iconContainer"><NotificationsIcon /></span> */}
        <span className="iconContainer"><SettingsIcon /></span>
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
    position: fixed;
    z-index: 3;

    .iconContainer{
        width: 1.6rem;
        height: 1.6rem;
        display:flex;
        align-items: center;
        >*{
            fill:green
        }
    }
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


