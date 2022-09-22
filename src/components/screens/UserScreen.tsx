import React from "react";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import { Post as PostType, useUserQuery } from "graphql/types";
import StyledUserInfo from "components/StyledUserInfo";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import UserFollowOptions from "components/styled/UserFollowOptions";
import RestrictedPostList from "components/RestrictedPostList";
import { StyledLink } from "components/StyledLink";


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
                <StyledListsContainer>
                    <span>Following ({user.following.length})</span>

                    <StyledUserProfileImageList>
                    {user?.following.map(following=>following && <StyledLink to={"/users/" + following.id}>
                        <StyledProfileImage src={following?.profileImageUrl || ""}/>
                    </StyledLink>)}
                    </StyledUserProfileImageList>

                    <span>Followers ({user?.followers?.length})</span>
                    <StyledUserProfileImageList>
                    {user?.followers?.map(follower=>follower && <StyledLink to={"/users/" + follower.id}>
                        <StyledProfileImage src={follower?.profileImageUrl || ""}/>
                    </StyledLink>)}
                    </StyledUserProfileImageList>
                </StyledListsContainer>
                <UserFollowOptions user={user}/>
                </StyledUserInfo>
                <RestrictedPostList posts={(user?.posts.map(post=>({...post, author: user})))as PostType[]}/>
            </>}
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}


const StyledUserProfileImageList = styled.ul`
    display: flex;
    flex-flow: row wrap;
`
const StyledListsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
