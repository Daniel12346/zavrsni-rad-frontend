import React, { ReactNode } from "react";
import { Router, Link } from "@reach/router";
import { Location } from "@reach/router";
import RouterPage from "./RouterPage";
import GlobalStyle from "./styled/GlobalStyle";
import { useMeQuery } from "graphql/types";
import AuthScreen from "./screens/AuthScreen";
import styled from "styled-components";
import Loader from "./Loader";
import UserScreen from "./screens/UserScreen";

export default () => {
  const { data, error, loading } = useMeQuery();

  return (
    <>
      <GlobalStyle />
      {error && <span>{error.message.toUpperCase() !== "NOT AUTHENTICATED" && error.message}</span>}
      {console.log(data)}
      {loading ? <StyledMainLoaderContainer><Loader></Loader></StyledMainLoaderContainer> : !error && data?.me ?
        (<>


          <MotionRouter>
            {/* <RouterPage component={<ChatList />} path="/" /> */}
            <RouterPage component={<AuthScreen />} path="/auth" />
            <RouterPage component={<UserScreen />} path="/user/:userId" />
          </MotionRouter>
        </>)
        : <AuthScreen></AuthScreen>
      }
    </>
  );
};

interface MotionRouterProps {
  children: ReactNode;
}

const MotionRouter = ({ children }: MotionRouterProps) => (
  <Location>
    {({ location }) => <Router location={location}>{children}</Router>}
  </Location>
);


const StyledMainLoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`