import React from "react";
import { useUsersQuery } from "graphql/types"
import Nav from "components/Nav";
import ScreenContentContainer from "components/ScreenContentContainer";

export default () => {
    const { data, loading } = useUsersQuery();
    return <>
        <Nav />
        <ScreenContentContainer>
            <ul>{data?.users?.map(user => <li>{user?.firstName}</li>)}</ul>
        </ScreenContentContainer>
    </>
}

