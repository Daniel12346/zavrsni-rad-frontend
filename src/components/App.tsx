import React, { ReactNode } from "react";
import { Routes, Route, Outlet } from "react-router";
import GlobalStyle from "./styled/GlobalStyle";
import { useMeQuery } from "graphql/types";
import AuthScreen from "./screens/AuthScreen";
import styled from "styled-components";
import Loader from "./Loader";
import UserScreen from "./screens/UserScreen";
import Nav from "./Nav";

export default () => {
  const { data, error, loading } = useMeQuery();

  return (
    <>
      <GlobalStyle />
      {error && <span>{error.message.toUpperCase() !== "NOT AUTHENTICATED" && error.message}</span>}
      {console.log(data)}
      {loading ?
        <StyledMainLoaderContainer>
          <Loader />
        </StyledMainLoaderContainer> : !error && data?.me ?

          <Routes>
            <Route element={<Layout />}>
              <Route element={<UserScreen></UserScreen>} path="/" />
            </Route>
          </Routes>

          : <AuthScreen></AuthScreen>
      }
    </>
  );
};



const StyledMainLoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 100vh;
`

const Layout = () => {
  return <StyledLayoutContainer>
    <Nav></Nav>
    <Outlet></Outlet>
  </StyledLayoutContainer>
}