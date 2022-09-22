import React from "react";
import { Post as PostType, User} from "graphql/types";
import { useMe } from "./hooks/me";
import PostList from "./PostList";

interface Props {
    posts: PostType[]
}

export default ({posts}: Props)=>{
    const {me} = useMe();
    const viewablePosts = posts?.filter(post => !post.restrictedTo || (post.restrictedTo === "FOLLOWERS" && post?.author?.followers?.find(follower=>follower && (follower.id === me?.id))));
    return <PostList posts={viewablePosts}></PostList>
}
