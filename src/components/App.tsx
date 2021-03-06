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
            {/* <Route element={<Layout />}> */}
            <Route element={<MeScreen />} path="/" />
            <Route element={<UsersScreen />} path="/users" />
            <Route element={<SearchResultsScreen searchKey={"e"}/>} path="/search" />
            {/* <Route element={<UserScreen />} path="/user" /> */}

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


