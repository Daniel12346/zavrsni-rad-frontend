import { ME_QUERY } from "graphql/queries";
import { useCreatePostMutation } from "graphql/types";
import React, { useState } from "react"
import styled from "styled-components"

interface CreatePostModalProps {
    isDisplayed: boolean;
    //TODO: function typing
    setIsDisplayed?: any;
}


export default ({ isDisplayed, setIsDisplayed }: CreatePostModalProps) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [mainImageFile, setMainImageFile] = useState<any>();
    let additionalImageFiles: any = null;
    const [createPost, { loading, error }] = useCreatePostMutation({ refetchQueries: [{ query: ME_QUERY }] });
    error && console.log(error);

    return <StyledModalBackdrop isDisplayed={isDisplayed} onClick={() => {
        // setIsDisplayed(false);
    }
    }>
        <StyledModal isDisplayed={isDisplayed} onSubmit={(e) => {
            e.preventDefault();
            console.log(additionalImageFiles);
            createPost({ variables: { title, text, mainImageFile, additionalImageFiles } });
        }}>
            <input name="title" placeholder="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input name="text" placeholder="text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="file" onChange={({ target: { validity, files: [file] } }: any) => {
                if (validity.valid) {
                    setMainImageFile(file);
                }
                // setIsvalid(validity.valid);
            }} />
            {/* TODO!!!: popravit na backendu */}
            <input type="file" multiple onChange={({ target: { validity, files } }: any) => {
                console.log(validity);
                if (validity.valid) {
                    additionalImageFiles = files;
                    console.log(additionalImageFiles);
                    console.log(files);

                }
                // setIsvalid(validity.valid);
            }} />
            {/* {loading && <span>uploading...</span>} */}
            {/* {(error || !isValid) && <span>Image upload failed</span>} */}
            <button type="submit">Create post</button>
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
    opacity: ${(props) => props.isDisplayed ? "1" : "0"};
    pointer-events: ${(props) => props.isDisplayed ? "all" : "none"};
`
const StyledModal = styled.form<CreatePostModalProps>`
  //  display: ${props => props.isDisplayed ? "flex" : "none"};
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
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.base};
    height: 80vh;
`