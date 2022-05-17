import React from "react"
import styled from "styled-components"
interface Props {
    imageUrls: string[]
    onImageClick?: React.MouseEventHandler<HTMLImageElement>
}

//TODO
export default ({ imageUrls, onImageClick }: Props) => {
    return <StyledGalleryContainer>
        {imageUrls.length > 0 && <StyledImageList>{imageUrls.map(url => <StyledImage src={url} onClick={onImageClick} />)}</StyledImageList>}
    </StyledGalleryContainer>
}

const StyledGalleryContainer = styled.div`
    display: flex;
    width: auto;
    background: ${({ theme }) => theme.colors.postBg1};
    border-radius: 0.4rem;;
`
const StyledImage = styled.img`
    height: 4rem;
    padding: 0.5rem;
    width: 30%;
    min-width: 4rem;
    object-fit: cover;
    object-position: center;
`
const StyledImageList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    overflow-x: scroll;
    width: 100%;
    scroll-behavior: smooth;
`

