import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    text-decoration: none;
    width: auto;
    cursor: pointer;
    gap: 0.3rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.textBasic};
    >span {
        min-width: 50%;
    }
    img{
        min-width: 2rem;
    }
   
`;
