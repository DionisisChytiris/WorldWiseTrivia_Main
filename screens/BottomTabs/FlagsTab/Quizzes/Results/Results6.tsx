import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLockFlags } from "../../../../../ReduxSetUp/QuizLockState/FlagsQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/flags/FlagsQuizHome";

interface RouteParams {
  score: number;
}

type Results6RouteProp = RouteProp<{ params: RouteParams }, "params">;

const Results6: React.FC = () => {
  const route = useRoute<Results6RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockFlags);
  const price = Quizzes.find((q) => q.id === "7")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="6"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz7"
      setQuizLock={setQuizLockFlags}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default Results6;
