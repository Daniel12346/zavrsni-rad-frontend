import styled from "styled-components";

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.primary3};
    width: 95%;
    max-width: 35rem;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;

    .userName{
        color: darkgreen;
        width: 30%;
    }
`
export default StyledUserInfo;