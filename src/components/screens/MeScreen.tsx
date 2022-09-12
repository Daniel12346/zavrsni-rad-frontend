import React from "react";
import { useMe } from "components/hooks/me";
import ImageUploader from "components/ImageUploader";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import Post from "components/Post";
import { Post as PostType } from "graphql/types";
import StyledUserInfo from "components/StyledUserInfo";
import PostList, { StyledPostList } from "../PostList";

export default () => {
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
           
            <StyledUserInfo>
                <StyledProfileImage isLarge src={me?.profileImageUrl ?? ""} />
                <span className="userName">{me?.firstName} {me?.lastName}</span>
             <div>
                <span>ProfileImage:</span>
                <ImageUploader purpose="profile"></ImageUploader>
                <span>Background:</span>
                <ImageUploader purpose="background"></ImageUploader>
             </div> 
            <StyledListsContainer>

                <span>Following ({me?.following.length})</span>
                <StyledUserProfileImageList>
                {me?.following.map(following=>following && <li>
                    <StyledProfileImage src={following?.profileImageUrl || ""}/>
                </li>)}
                </StyledUserProfileImageList>

                <span>Followers ({me?.followers?.length})</span>
                <StyledUserProfileImageList>
                {me?.followers?.map(follower=>follower && <li>
                    <StyledProfileImage src={follower?.profileImageUrl || ""}/>
                </li>)}
                </StyledUserProfileImageList>
            </StyledListsContainer>
            </StyledUserInfo>
            {/* <StyledPostList>
                {me?.posts.map(post => <Post post={{...post,author: me} as PostType} />)}
            </StyledPostList> */}
            <PostList posts={(me?.posts.map(post=>({...post, author:me})))as PostType[]}></PostList>
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
