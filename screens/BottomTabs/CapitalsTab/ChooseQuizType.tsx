import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return (
    // <MainChooseQuizTypeTemplate screen='CapitalsHome'/>
    <MainChooseQuizTypeTemplate
      screen="CapitalsHome"
      image1={require("../../../assets/more/images.jpg")}
      image2={require("../../../assets/more/words.jpg")}
      show="true"
      lottieAnm={require("../../../assets/LottieAnimation/Capitals.json")}
      lottieHeight="10%"
    />
  );
};

export default ChooseQuizType;
