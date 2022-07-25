import { usePostsByKeyQuery, useUsersByKeyQuery } from "graphql/types";
import React from "react";

interface Props {
    searchKey: string;
}
export default (searchKey: Props)=>{
    const {data:usersData} = useUsersByKeyQuery({variables:{key:"e"}});
    const {data:postsData} = usePostsByKeyQuery({variables:{key:"d"}});
    usersData?.usersByKey && console.log(usersData.usersByKey);
    postsData?.postsByKey && console.log(postsData.postsByKey);
    return <div>e</div>
}