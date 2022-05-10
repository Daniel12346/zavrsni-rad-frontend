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

export default () => {
    const { me } = useMe();


    return <>
        <Nav />
        <ScreenContentContainer backgroundUrl={me?.backgroundImageUrl ?? ""}>
            <div style={{ background: "red" }}>
                <span>ProfileImage:</span>
                <ImageUploader purpose="profile"></ImageUploader>
                <span>Background:</span>
                <ImageUploader purpose="background"></ImageUploader>
            </div>
            <StyledUserInfo>
                <StyledProfileImage src={me?.profileImageUrl ?? ""} />
                <span>{me?.firstName}</span>
                <StyledPostList>
                    {me?.posts.map(post => <Post post={post as PostType} />)}
                </StyledPostList>
            </StyledUserInfo>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.postBg1};
    width: 95%;
    max-width: 40rem;
    display:flex;
    flex-flow: column nowrap;
    align-items: center;
`

const StyledPostList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style: none;
    width: 95%;
    max-width: 30rem;

`





