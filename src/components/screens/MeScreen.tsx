import React from "react";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";
import { Post as PostType, useUserQuery } from "graphql/types";
import StyledUserInfo from "components/StyledUserInfo";
import Loader from "components/Loader";
import { useMe } from "components/hooks/me";
import RestrictedPostList from "components/RestrictedPostList";
import { StyledLink } from "components/StyledLink";


export default () => {
    const {me, loading} = useMe();

    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
            {loading && <Loader/>}
            {me && 
            <>
                <StyledUserInfo>
                    <StyledProfileImage isLarge src={me?.profileImageUrl ?? ""} />
                    <span className="userName">{me?.firstName} {me?.lastName}</span>
                <StyledListsContainer>
                    <span>Following ({me?.following.length})</span>

                    <StyledUserProfileImageList>
                    {me?.following.map(following=>following && <StyledLink to={"/users/" + following.id}>
                        <StyledProfileImage src={following.profileImageUrl || ""}/>
                    </StyledLink>)}
                    </StyledUserProfileImageList>

                    <span>Followers ({me?.followers?.length})</span>
                    <StyledUserProfileImageList>
                    {me?.followers?.map(follower=>follower && <StyledLink to={"/users/" + follower.id}>
                        <StyledProfileImage src={follower?.profileImageUrl || ""}/>
                    </StyledLink>)}
                    </StyledUserProfileImageList>
                </StyledListsContainer>
                </StyledUserInfo>
                <RestrictedPostList posts={(me?.posts.map(post=>({...post, author: me})))as PostType[]}/>
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