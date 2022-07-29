import React, { useState } from "react";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";

interface Props {
    imageUrls: string[];
}
export default ({ imageUrls }: Props) => {

    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const prevImageIdx = currentImageIdx - 1 >= 0 ? currentImageIdx - 1 : imageUrls.length - 1;
    const nextImageIdx = currentImageIdx + 1 <= imageUrls.length - 1 ? currentImageIdx + 1 : 0;


    const handleGalleryImageClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        const clickedImage = e.target as HTMLImageElement;
        const clickedImageIdx = imageUrls.findIndex(url => url === clickedImage.src);
        clickedImageIdx >= 0 && setCurrentImageIdx(clickedImageIdx);

    }

    return <>
        <StyledImagesContainer>
            <img className="prev" onClick={handleGalleryImageClick} src={imageUrls[prevImageIdx]} alt="" />
            <img className="current" src={imageUrls[currentImageIdx]} alt="" />
            <img className="next" onClick={handleGalleryImageClick}  src={imageUrls[nextImageIdx]} alt="" />

        </StyledImagesContainer>
        <ImageGallery imageUrls={imageUrls} onImageClick={handleGalleryImageClick} />
    </>
}

const StyledImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    position: relative;
    width: 100%;
    padding-bottom: 5vh;
    >img{
        position: absolute;
        max-width: 40%;
        max-height: 60%;
    }
    img.prev{
        left: 1rem;
        top: 20%;
    }
    img.current{
        position: unset;
        z-index: 2;
        max-width: 60%;
        box-shadow: ${({ theme }) => theme.shadows.base}
    }
    img.next{
        right: 1rem;
        top: 20%;
    }

`