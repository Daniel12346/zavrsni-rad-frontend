import React from "react";
import { useMe } from "components/hooks/me";
import ImageUploader from "components/ImageUploader";
import StyledProfileImage from "components/StyledProfileImage";
import Nav from "components/Nav";
import ScreenContentContainer from "../ScreenContentContainer";
import styled from "styled-components";

export default () => {
    const { me } = useMe();

    if (!me) return null;
    return <>
        <Nav />
        <ScreenContentContainer>
            <StyledUserInfo>
                <StyledProfileImage src={me.profileImageUrl ?? ""} />
                <StyledUserDetails>
                    <span>{`${me.firstName} ${me.lastName}`}</span>
                    <span>Split</span>
                </StyledUserDetails>
                <button>Follow</button>
                <div style={{ width: "100%" }}>Achievements:</div>
            </StyledUserInfo>
            <div>

            </div>
        </ScreenContentContainer>
    </>
}

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.postBg3};
    width: 75%;
    max-width: 20rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`
const StyledUserDetails = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 60%;
    align-items: flex-start;
`
//TODO:
//const StyledUserAchievements