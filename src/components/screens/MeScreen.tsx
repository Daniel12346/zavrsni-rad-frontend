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
                <StyledLargeProfileImage src={me?.profileImageUrl ?? ""} />
                <span className="userName">{me?.firstName} {me?.lastName}</span>
                <StyledAchievementsContainer>
                    {/* TODO: */}
                    <AchievementGold></AchievementGold>
                    <AchievementGold></AchievementGold>
                    <AchievementGold></AchievementGold>
                </StyledAchievementsContainer>
            </StyledUserInfo>
            <StyledPostList>
                {me?.posts.map(post => <Post post={post as PostType} />)}
            </StyledPostList>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.primary3};
    width: 95%;
    max-width: 35rem;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;

    .userName{
        color: darkgreen;
    }
`

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

const StyledLargeProfileImage = styled(StyledProfileImage)`
    height: 4rem;
    width: 4rem;
`
const StyledAchievementsContainer = styled.div`
    width: 100%;
`


