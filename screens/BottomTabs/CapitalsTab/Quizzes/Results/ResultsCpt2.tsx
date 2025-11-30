import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLock as setCapitalsQuizLock } from "../../../../../ReduxSetUp/QuizLockState/CapitalsQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/capitals/CapitalsQuizHome";

interface RouteParams {
  score: number;
}

type ResultsCpt2RouteProp = RouteProp<{ params: RouteParams }, "params">;

const ResultsCpt2: React.FC = () => {
  const route = useRoute<ResultsCpt2RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockCapitals);
  const price = Quizzes.find((q) => q.id === "3")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="2"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz3"
      setQuizLock={setCapitalsQuizLock}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResultsCpt2;
