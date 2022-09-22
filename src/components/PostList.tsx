import React from "react";
import { Post as PostType} from "graphql/types";
import styled from "styled-components";
import Post from "./Post";

interface Props {
    posts: PostType[]
}

export default ({posts}: Props)=><StyledPostList>
    {posts?.map((post: PostType) => <Post key={post.id} post={post as PostType} />)
        .sort((a, b) => {
            const dateA = a && new Date(a.props.post.createdAt);
            const dateB = b && new Date(b.props.post.createdAt);
            return (dateA && dateB && (dateB as any - (dateA as any))) ?? 0;
        })}
</StyledPostList>

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
