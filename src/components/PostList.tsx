import React from "react";
import { Post as PostType} from "graphql/types";
import styled from "styled-components";
import Post from "./Post";

interface Props {
    posts: PostType[]
}

export default ({posts}: Props)=>{
     return <StyledPostList> 
         {posts?.map(post => <Post post={post as PostType} />)}
     </StyledPostList> 
}

export const StyledPostList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style: none;
    padding-top: 2rem;
    width: 95%;
    background: ${({ theme }) => theme.colors.postBg1};
    max-width: 35rem;
`;
