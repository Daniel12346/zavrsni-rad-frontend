import React from "react";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import Post from "components/Post";
import { Post as PostType, useUserQuery } from "graphql/types";
import { ReactComponent as AchievementGold } from "images/achievement_gold.svg"
import StyledUserInfo from "components/StyledUserInfo";
import { StyledPostList } from "../PostList";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";


export default () => {
    const {userId} = useParams();
    const {data, loading, error} = useUserQuery({variables:{id: userId}});
    const user = data?.user;

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={user?.backgroundImageUrl ?? ""}>
            {loading && <Loader/>}
            {user && 
            <>
                <StyledUserInfo>
                    <StyledProfileImage isLarge src={user.profileImageUrl ?? ""} />
                    <span className="userName">{user.firstName} {user.lastName}</span>
                    <StyledAchievementsContainer>
                        {/* TODO: */}
                        <AchievementGold />
                        <AchievementGold />
                        <AchievementGold />
                    </StyledAchievementsContainer>
                <StyledListsContainer>
                    <span>Following ({user.following.length})</span>

                    <StyledUserProfileImageList>
                    {user?.following.map(following=>following && <li>
                        <StyledProfileImage src={following?.profileImageUrl || ""}/>
                    </li>)}
                    </StyledUserProfileImageList>

                    <span>Followers ({user?.followers?.length})</span>
                    <StyledUserProfileImageList>
                    {user?.followers?.map(follower=>follower && <li>
                        <StyledProfileImage src={follower?.profileImageUrl || ""}/>
                    </li>)}
                    </StyledUserProfileImageList>
                </StyledListsContainer>

                </StyledUserInfo>
                <StyledPostList>
                    {user?.posts.map(post => <Post post={{...post,author:user} as PostType} />)}
                </StyledPostList>
            </>}
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
