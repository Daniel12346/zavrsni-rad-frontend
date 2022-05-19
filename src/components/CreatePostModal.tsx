import { ME_QUERY } from "graphql/queries";
import { useCreatePostMutation } from "graphql/types";
import React, { useState } from "react"
import styled from "styled-components"
import ImageGallery from "./ImageGallery";
import { ReactComponent as ConfirmPostCreationButton } from "images/confirm_create_post.svg"
import { ReactComponent as ExitPostCreationButton } from "images/exit_create_post.svg"
import Loader from "./Loader";
import StyledFileInput from "./StyledFileInput";

interface CreatePostModalProps {
    isModalDisplayed: boolean;
    //TODO: function typing
    setIsModalDisplayed?: any;
}


export default ({ isModalDisplayed, setIsModalDisplayed }: CreatePostModalProps) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [mainImageFile, setMainImageFile] = useState<any>();
    const [additionalImageFiles, setAdditionalImageFiles] = useState<any[]>([]);
    const [createPost, { loading, error }] = useCreatePostMutation({ refetchQueries: [{ query: ME_QUERY }], onCompleted: () => { setIsModalDisplayed(false) } });


    return <StyledModalBackdrop isModalDisplayed={isModalDisplayed}>
        <StyledModal isModalDisplayed={isModalDisplayed} onSubmit={(e) => {
            e.preventDefault();
            createPost({ variables: { title, text, mainImageFile, additionalImageFiles } });
        }}>
            <Row alignItems="center" justifyContent="space-between">
                <span className="createNewPostSpan">Create new post:</span>
                <div className="buttonContainer">
                    <button onClick={() => setIsModalDisplayed(false)}>
                        <ExitPostCreationButton />
                    </button>
                </div>
            </Row>
            <input className="title" name="title" placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <MainImageFileInputAndPreviewContainer isImageUploaded={!!mainImageFile}>
                <label htmlFor="mainImageFile">Select main image:</label>
                <StyledFileInput name="mainImageFile" placeholder="Select" type="file" onChange={({ target: { validity, files: [file] } }: any) => {
                    if (validity.valid) {
                        setMainImageFile(file);
                    }
                }} />

                <img src={(mainImageFile && URL.createObjectURL(mainImageFile)) ?? "none"} alt="" />
            </MainImageFileInputAndPreviewContainer>
            <textarea className="text" name="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)} />
            <Row>
                <label htmlFor="additionalImageFile">Add other images:</label>
                <StyledFileInput name="additionalImageFiles" type="file" multiple onChange={({ target: { validity, files } }: any) => {
                    if (validity.valid) {
                        //files is not an Array (TODO: find out why)
                        files && setAdditionalImageFiles(Array.from(files));
                    }
                }} />
            </Row>
            {/* creating local urls for preview, the urls that are stored in the database
            are created during the upload */}

            {/* TODO: grid (ili noc boje ime za ovo) */}
            <StyledGalleryAndCreationConfirmationButtonContainer>
                <ImageGallery imageUrls={additionalImageFiles.map(URL.createObjectURL)} />
                <div className="buttonContainer">
                    <button type="submit"><ConfirmPostCreationButton /></button>
                </div>
            </StyledGalleryAndCreationConfirmationButtonContainer>
            <Row alignItems="center" justifyContent="center">
            {loading && <Loader />}
            {error && <span className="error">{error.message}</span>}
            </Row>
        </StyledModal>
    </StyledModalBackdrop>
}

const StyledModalBackdrop = styled.div<CreatePostModalProps>`
    background: hsla(158, 26%, 5%, 0.5);
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: 3;
    opacity: ${(props) => props.isModalDisplayed ? "1" : "0"};
    pointer-events: ${(props) => props.isModalDisplayed ? "all" : "none"};
`
const StyledModal = styled.form<CreatePostModalProps>`
    display: flex;
    z-index: 4;
    position: fixed;
    right: 0;
    left: 0;
    top: 5vh;
    margin: 0 auto;
    width: 90%;
    max-width: 40rem;
    background: ${({ theme }) => theme.colors.background1};
    border-radius: 1rem; 
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.base};
    min-height: 80vh;
    color: ${({ theme }) => theme.colors.primary4};
    input[type="text"], textarea {
        padding: 0.4rem;
        margin: 1rem 0;
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.primary4};
        background: ${({ theme }) => theme.colors.postBg3};
    }

    button{
        &[type="submit"]{
            background: unset;
            margin-top: 0.5rem
        }
    }

    textarea{
        min-height: 6rem;
        text-align: start;
        resize: none;
    }

    label{
        width: 20%;
        min-width: 3rem;
        display: inline-block;
    }
    .buttonContainer > button{
        background: transparent;
        cursor: pointer;
    }
`

const StyledGalleryAndCreationConfirmationButtonContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    
    .buttonContainer{
        display: flex;
        justify-content: flex-end;
        flex: 1 0 15%;
    }

    >div{
        flex: 1 0 65%;
    }

`


interface Props {
    isImageUploaded: boolean
}
const MainImageFileInputAndPreviewContainer = styled.div<Props>`
    display: flex;
    flex-flow: row wrap;
    
    img{
        flex: 1 0 25%;
        height: 4rem;
        display: ${({ isImageUploaded }) => isImageUploaded ? "block" : "none"};
        object-position: center;
        object-fit: contain;
        min-width: 5rem;
    }
   
`

interface RowProps {
    justifyContent?: string;
    alignItems?: string;
    wrap?: string;
}
const Row = styled.div<RowProps>`
    display: flex;
    flex-flow: ${({ wrap }) => `row ${wrap || ""}`};
    justify-content: ${({ justifyContent }) => justifyContent || "initial"};
    align-items: ${({ alignItems }) => alignItems || "initial"};   
`

// StyledLoadingAndErrorIndicator = styled.div`
    
// `