import React from "react";
import { Post } from "graphql/types";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
import ImageAlbum from "./ImageAlbum";

interface PostProps {
    post: Post
}
export default ({ post: { imageUrls, title, text, mainImageUrl } }: PostProps) => (<StyledPostContainer>
    <span className="postTitle">{title}</span>
    {imageUrls?.length && !text && !mainImageUrl ?
        <ImageAlbum imageUrls={imageUrls as string[]} />
        :
        <>
            {mainImageUrl && <img src={mainImageUrl} alt="" className="postMainImage" />}
            <p className="postText">
                {text}
            </p>
            {imageUrls?.length > 0 && <ImageGallery imageUrls={imageUrls as string[]} />}
        </>
    }
</StyledPostContainer>)


const StyledPostContainer = styled.li`
    background: ${({ theme }) => theme.colors.postBg2};
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0.5rem 0;
    width: 90%;
    .postTitle{
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.colors.text3};
        /* order: 2; */

    }
    .postMainImage{
        width: 100%;
        max-height: 40vh;
        object-fit: cover;
        object-position: top;
        margin-bottom: 1.2rem;
        background: unset;
        /* order: 1; */
    }
    .postText{
        align-self: flex-start;
        color: ${({ theme }) => theme.colors.textBasic};
        padding: 0 1.5rem;
        margin-bottom: 1rem;
        /* order: 3; */
    }

`