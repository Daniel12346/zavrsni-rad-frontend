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
import { ReactComponent as AchievementGold } from "images/achievement_gold.svg"
import StyledUserInfo from "components/StyledUserInfo";
import { StyledPostList } from "../PostList";

export default () => {
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
           
            <StyledUserInfo>
                <StyledProfileImage isLarge src={me?.profileImageUrl ?? ""} />
                <span className="userName">{me?.firstName} {me?.lastName}</span>
                <StyledAchievementsContainer>
                    {/* TODO: */}
                    <AchievementGold />
                    <AchievementGold />
                    <AchievementGold />
                </StyledAchievementsContainer>
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

                <span>Followers ({me?.followers.length})</span>
                <StyledUserProfileImageList>
                {me?.followers.map(follower=>follower && <li>
                    <StyledProfileImage src={follower?.profileImageUrl || ""}/>
                </li>)}
                </StyledUserProfileImageList>
            </StyledListsContainer>
            </StyledUserInfo>
            <StyledPostList>
                {me?.posts.map(post => <Post post={post as PostType} />)}
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
