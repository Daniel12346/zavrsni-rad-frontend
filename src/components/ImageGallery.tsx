import React from "react"
import styled from "styled-components"
interface Props {
    imageUrls: string[]
    onImageClick?: React.MouseEventHandler<HTMLImageElement>
}

//TODO
export default ({ imageUrls, onImageClick }: Props) => {
    return <StyledGalleryContainer>
        <StyledImageList>{imageUrls.map(url => <StyledImage src={url} onClick={onImageClick} />)}</StyledImageList>
    </StyledGalleryContainer>
}

const StyledGalleryContainer = styled.div`
    display: flex;
    width: 90%;
    background: ${({ theme }) => theme.colors.postBg1};
    padding: 0.6rem;
    border-radius: 0.4rem;;
`
const StyledImage = styled.img`
    height: 4rem;
    width: 30%;
    object-fit: contain;
    object-position: center;
`
const StyledImageList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    gap: 2rem;
    overflow-x: scroll;
    width: 100%;
    scroll-behavior: smooth;
`

