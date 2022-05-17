import styled from "styled-components";


interface Props {
    backgroundUrl?: string;
}

const ScreenContentContainer = styled.div<Props>`
    background: ${({ backgroundUrl }) => backgroundUrl ? `url(${backgroundUrl})` : "blue"};
    padding-top: 5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-height: 100vh;
    background-size: 100vw 100vh;
    background-attachment: fixed;
    background-position: center;
`;

export default ScreenContentContainer;
