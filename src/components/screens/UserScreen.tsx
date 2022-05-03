import React from "react";
import { useUsersQuery } from "graphql/types"

export default () => {
    const { data, loading } = useUsersQuery();
    return <div>
        <ul>{data?.users?.map(user => <li>{user?.firstName}</li>)}</ul>
    </div>
}

