import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import { setQuizLockNaturalMnt } from "../../../../../ReduxSetUp/QuizLockState/NaturalMntQuizLockSlice";
import Quizzes from "../../../../../data/naturalMnts/NaturalQuizHome";

const ResNrtMnt5 = () => {
  const route = useRoute();
  const correct = route.params.score;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockNaturalMnt);
  const price = Quizzes.find((q) => q.id === "6")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="5"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz6"
      setQuizLock={setQuizLockNaturalMnt}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResNrtMnt5;
