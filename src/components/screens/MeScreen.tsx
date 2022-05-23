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

export default () => {
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
            {/* <div style={{ background: "red" }}>
                <span>ProfileImage:</span>
                <ImageUploader purpose="profile"></ImageUploader>
                <span>Background:</span>
                <ImageUploader purpose="background"></ImageUploader>
            </div> */}
            <StyledUserInfo>
                <StyledProfileImage isLarge src={me?.profileImageUrl ?? ""} />
                <span className="userName">{me?.firstName} {me?.lastName}</span>
                <StyledAchievementsContainer>
                    {/* TODO: */}
                    <AchievementGold />
                    <AchievementGold />
                    <AchievementGold />
                </StyledAchievementsContainer>
            </StyledUserInfo>
            <StyledPostList>
                {me?.posts.map(post => <Post post={post as PostType} />)}
            </StyledPostList>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}

const StyledPostList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style: none;
    padding-top: 2rem;
    width: 95%;
    background: ${({ theme }) => theme.colors.postBg1};
    max-width: 35rem;
`

const StyledAchievementsContainer = styled.div`
    width: 100%;
`


