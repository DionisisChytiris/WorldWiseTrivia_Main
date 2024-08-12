import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return <MainChooseQuizTypeTemplate 
    screen="FlagsHome" 
    show="true" 
    lottieAnm={require("../../../assets/LottieAnimation/Flags.json")}
    lottieHeight='8%'
  />;
};

export default ChooseQuizType;
