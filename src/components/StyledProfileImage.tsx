import styled from "styled-components";

interface Props {
    isLarge?: boolean
}
const StyledProfileImage:any = styled.img<Props>`
    width: ${({ isLarge }) => isLarge ? "4rem" : "2rem"};
    height: ${({ isLarge }) => isLarge ? "4rem" : "2rem"};
    border-radius: 50%;
`;

export default StyledProfileImage;

