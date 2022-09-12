import React from "react";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import Post from "components/Post";
import { Post as PostType, useViewablePostsQuery } from "graphql/types";
import { StyledPostList } from "../PostList";

export default () => {
    const {data} = useViewablePostsQuery({variables:{showPublicPosts:true}});
    const posts = data?.viewablePosts;
    console.log(data);
    return <>
        <Nav />
        <ScreenContentContainer>
            <StyledPostList>
                {posts && posts.map(post => <Post post={post as PostType} />)}
            </StyledPostList>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}



