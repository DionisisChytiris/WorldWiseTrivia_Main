import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const ResultsCpt1 = () => {
  const route = useRoute();
  // const correct = route.params.score
  const correct = 40
  const wrong = 100 - correct
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];

  return (
    <MainResultsTemplate
      title="Quiz 1 Results"
      data={data}
      percentage={correct}
      correctAnswers='Correct Answers'
      textPercentage='Percentage'
      wrongAnswers='Wrong Answers'
      // text4={wrong}
      // scrn="CapitalsHome"
    />
  );
};

export default ResultsCpt1;
