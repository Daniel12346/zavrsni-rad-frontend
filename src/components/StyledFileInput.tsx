import styled from "styled-components";

const StyledFileInput = styled.input`
    padding: 0.5rem;
    min-width: 5rem;
    margin-left: 1rem;
    color: transparent;
    ::file-selector-button{
        width: auto;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.colors.button1};
        color: white;
        font-weight: normal;
    }  
`
export default StyledFileInput;