import React from "react";
import { useMe } from "components/hooks/me";
import ImageUploader from "components/ImageUploader";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import Post from "components/Post";
import { Post as PostType, useViewablePostsQuery } from "graphql/types";
import { ReactComponent as AchievementGold } from "images/achievement_gold.svg"
import StyledUserInfo from "components/StyledUserInfo";
import { StyledPostList } from "../PostList";

export default () => {
  //  const { me } = useMe();
    //TODO: posts to view
    const {data} = useViewablePostsQuery({variables:{showPublicPosts:true}});
    const posts = data?.viewablePosts;
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

const StyledAchievementsContainer = styled.div`
    width: 100%;
`
const StyledUserProfileImageList = styled.ul`
    display: flex;
    flex-flow: row wrap;
`
const StyledListsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;

`
