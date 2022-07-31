import React from "react";
import { Routes, Route } from "react-router";
import GlobalStyle from "./styled/GlobalStyle";
import { useMeQuery } from "graphql/types";
import AuthScreen from "./screens/AuthScreen";
import styled from "styled-components";
import Loader from "./Loader";
import UsersScreen from "./screens/UsersScreen";
import UserScreen from "./screens/UserScreen";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import MeScreen from "./screens/MeScreen";
import InitialScreen from "./screens/InitialScreen";

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
            <Route element={<MeScreen />} path="/me" />
            <Route element={<InitialScreen />} path="/"/>
            <Route element={<UsersScreen />} path="/users" />
            <Route element={<UserScreen />} path="/users/:userId" />
            <Route element={<SearchResultsScreen/>} path="/search/:searchkey" />
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

export const StyledLayoutContainer = styled.div`
  min-height: 100vh;
`


