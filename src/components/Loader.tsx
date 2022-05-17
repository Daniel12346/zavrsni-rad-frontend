import { ReactComponent as LoaderSVG } from "images/zavrsni_loader.svg"
import styled, { keyframes } from "styled-components"



const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}`

export default styled(LoaderSVG)`
    #loop1{
    transform-origin: center;
     animation: ${rotate} 1.2s infinite ease-in-out;
    }
    #loop2{
    transform-origin: center;
     animation: ${rotate} 1.2s infinite reverse ease-out;
    }
    width: 50px;
    height: 50px;
`
