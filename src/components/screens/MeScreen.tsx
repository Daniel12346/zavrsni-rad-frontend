import React from "react";
import { useMe } from "components/hooks/me";
import ImageUploader from "components/ImageUploader";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import CreatePostButton from "components/CreatePostButton";
import styled from "styled-components";

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
                {/* //TODO: koristit post.id za key */}
                <ul>{me?.posts.map(post => post && <li>{post.title}</li>)}</ul>
            </StyledUserInfo>
        </ScreenContentContainer>
        <CreatePostButton />
    </>
}

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.postBg1}
`




