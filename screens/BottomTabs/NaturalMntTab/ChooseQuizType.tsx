import React from "react";
import MainChooseQuizTypeTemplate from "../Templates/MainChooseQTypeTemplate";

const ChooseQuizType = () => {
  return (
    <MainChooseQuizTypeTemplate
      screen="NaturalMntHome"
      image1={require("../../../assets/more/NtrMnt1.webp")}
      image2={require("../../../assets/more/NtrMnt2.jpg")}
      lottieHeight="28%"
      lottieAnm={require("../../../assets/LottieAnimation/NaturalMnt.json")}
    />
  );
};

export default ChooseQuizType;
