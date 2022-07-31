import React from "react";
import { Post } from "graphql/types";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
import ImageAlbum from "./ImageAlbum";
import StyledProfileImage from "./StyledProfileImage";
import { useMe } from "./hooks/me";
import { StyledLink } from "./StyledLink";

interface PostProps {
    post: Post
}
export default ({ post: { imageUrls, title, text, mainImageUrl, author } }: PostProps) =>{
    const {me} = useMe();

    return (<StyledPostContainer>
    <span className="postTitle">{title}</span>
    {me?.id && author?.id !== me?.id &&
        <div className="postAuthorInfo">
        <StyledLink to={"/users/" + author.id}>

            <StyledProfileImage src={author?.profileImageUrl ?? ""}/>
            <span>{`${author?.firstName} ${author?.lastName}`}</span>
        </StyledLink>

        </div>
    }
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
}

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
        object-position: center;
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
    .postAuthorInfo{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        padding-left: 0.5rem;
        margin-bottom: 1rem;
        gap: 0.3rem;
        color: ${({ theme }) => theme.colors.textLighter};
    }

`