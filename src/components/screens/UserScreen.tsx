import React from "react";
import styled from "styled-components";
import { useUserQuery } from "graphql/types";

//TODO: router variable
interface Props {
    userId: string;
}
export default ({ userId }: Props) => {
    const { data, loading, error } = useUserQuery({ variables: { id: userId } });
    const user = data?.user;

    // if (!user) return null;
    // return <>
    //     <Nav />
    //     <ScreenContentContainer>
    //         <StyledUserInfo>
    //             <StyledProfileImage src={user.profileImageUrl ?? ""} />
    //             <StyledUserDetails>
    //                 <span>{`${me.firstName} ${.lastName}`}</span>
    //                 <span>Split</span>
    //             </StyledUserDetails>
    //             <button>Follow</button>
    //             <div style={{ width: "100%" }}>Achievements:</div>
    //         </StyledUserInfo>
    //         <div>

    //         </div>
    //     </ScreenContentContainer>
    // </>
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