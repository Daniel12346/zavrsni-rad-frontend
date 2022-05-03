import React from "react";
import { useMe } from "components/hooks/me";
import ImageUploader from "components/ImageUploader";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";

export default () => {
    const { me } = useMe();

    return <>
        <Nav />
        <ScreenContentContainer>
            <ImageUploader></ImageUploader>
            <div>
                <StyledProfileImage src={me?.profileImageUrl ?? ""} />
                <span>{me?.firstName}</span>
            </div>
        </ScreenContentContainer>
    </>
}

