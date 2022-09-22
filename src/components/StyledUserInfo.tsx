import styled from "styled-components";

const StyledUserInfo = styled.div`
    background: ${({ theme }) => theme.colors.primary3};
    width: 95%;
    max-width: 35rem;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    .userName{
        color: darkgreen;
        width: 30%;
        font-size:1.3rem;
    }
`
export default StyledUserInfo;