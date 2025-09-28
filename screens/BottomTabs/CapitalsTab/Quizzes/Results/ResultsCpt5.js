import { useRoute } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLock as setCapitalsQuizLock } from "../../../../../ReduxSetUp/QuizLockState/CapitalsQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/capitals/CapitalsQuizHome";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const ResultsCpt5 = () => {
  const route = useRoute();
  const correct = route.params.score;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockCapitals);
  const price = Quizzes.find((q) => q.id === "6")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="5"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz6"
      setQuizLock={setCapitalsQuizLock}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResultsCpt5;
