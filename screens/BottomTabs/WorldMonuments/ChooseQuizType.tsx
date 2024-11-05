import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return (
    <MainChooseQuizTypeTemplate
      screen="WorldMonumentsHome"
      image1={require("../../../assets/more/worldMnt1.webp")}
      image2={require("../../../assets/more/worldMnt2.jpg")}
      lottieAnm={require("../../../assets/LottieAnimation/Bigben.json")}
      lottieHeight="20%"
    />
  );
};

export default ChooseQuizType;
