import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { View, Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const ResultsCpt1 = () => {
  const route = useRoute();
  const correct = route.params.score;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];


  return (
    <MainResultsTemplate
      number="1"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz2"
    />
  );
};

export default ResultsCpt1;
