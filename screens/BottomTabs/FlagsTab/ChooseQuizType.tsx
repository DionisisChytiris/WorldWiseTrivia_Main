import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return <MainChooseQuizTypeTemplate 
    screen="FlagsHome" 
    image1={require("../../../assets/more/images.jpg")}
    image2={require("../../../assets/more//words.jpg")}
    show="true" 
    lottieAnm={require("../../../assets/LottieAnimation/Flags.json")}
    lottieHeight='8%'
  />;
};

export default ChooseQuizType;
