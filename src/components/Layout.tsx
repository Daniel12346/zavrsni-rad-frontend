import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Nav from "./Nav";
import { StyledLayoutContainer } from "./App";

const Layout = () => {
    return <StyledLayoutContainer>
        <Nav />
        <Content />
    </StyledLayoutContainer>;
};

const StyledContentContainer = styled.div`
  padding-top: 8rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: red;
  

  @media(min-width: 500px){
        padding-top: 5rem
  }
`;
const Content = () => {
    return <StyledContentContainer>
        <Outlet />
    </StyledContentContainer>;
};

export default Layout;