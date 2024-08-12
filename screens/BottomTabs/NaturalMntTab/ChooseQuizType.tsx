import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return (
    <MainChooseQuizTypeTemplate
      screen="NaturalMntHome"
      lottieHeight="28%"
      lottieAnm={require("../../../assets/LottieAnimation/NaturalMnt.json")}
    />
  );
};

export default ChooseQuizType;
