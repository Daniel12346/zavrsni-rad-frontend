import React, { useState } from "react";
import { ReactComponent as Button } from "images/create_post_button.svg"
import styled from "styled-components";
import CreatePostModal from "./CreatePostModal";

export default () => {
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);
    return <div>
        <StyledButton onClick={() => {
            setIsModalDisplayed(prevState => !prevState)
        }
        } />
        <CreatePostModal isDisplayed={isModalDisplayed} setIsDisplayed={setIsModalDisplayed} />
    </div>
}


const StyledButton = styled(Button)`
    position: fixed;
    bottom: 5vh; 
    right: 5vh;
    cursor: pointer;
`

