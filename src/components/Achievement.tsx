import React from "react";

import { ReactComponent as AchievementGold } from "images/achievement_gold.svg"
import { ReactComponent as AchievementSilver } from "images/achievement_silver.svg"
import { ReactComponent as AchievementBronze } from "images/achievement_bronze.svg"
import styled from "styled-components";

interface Props{
    number: number;
    text:string;
}
export default ({number, text}: Props)=>{
    return <div style={{position: "relative", width:"auto"}}>
             <StyledAchievementGold/>
             {/* <span style={{position: "absolute", top:"30%", left:" 11px", color: "white"}}>{number}</span> */}
           </div>

}

const StyledAchievementGold = styled(AchievementGold)`

`