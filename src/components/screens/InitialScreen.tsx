import React from "react";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import { Post as PostType, useViewablePostsQuery } from "graphql/types";

import { useMe } from "components/hooks/me";
import RestrictedPostList from "components/RestrictedPostList";

export default () => {
    const {data} = useViewablePostsQuery({variables:{showPublicPosts:true}});
    const {me} = useMe();
    const posts = data?.viewablePosts;
    console.log(data);
    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? undefined}>
            <RestrictedPostList posts={posts as PostType[]}/>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}



