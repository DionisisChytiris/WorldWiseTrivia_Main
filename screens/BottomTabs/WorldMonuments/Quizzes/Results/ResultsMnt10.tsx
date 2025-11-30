import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLockWorldMnt } from "../../../../../ReduxSetUp/QuizLockState/WorldMntQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/worldMonuments/WorldMonumentsHome";

interface RouteParams {
  score: number;
}

type ResultsMnt10RouteProp = RouteProp<{ params: RouteParams }, "params">;

const ResultsMnt10: React.FC = () => {
  const route = useRoute<ResultsMnt10RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockWorldMnt);
  const price = Quizzes.find((q) => q.id === "2")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="10"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum=""
      setQuizLock={setQuizLockWorldMnt}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResultsMnt10;
