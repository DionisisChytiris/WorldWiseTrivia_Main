import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return (
    <MainChooseQuizTypeTemplate
      screen="WorldMonumentsHome"
      lottieAnm={require("../../../assets/LottieAnimation/Bigben.json")}
      lottieHeight="20%"
    />
  );
};

export default ChooseQuizType;
