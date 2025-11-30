import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLockWorldMnt } from "../../../../../ReduxSetUp/QuizLockState/WorldMntQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/worldMonuments/WorldMonumentsHome";

interface RouteParams {
  score: number;
}

type ResultsMnt3RouteProp = RouteProp<{ params: RouteParams }, "params">;

const ResultsMnt3: React.FC = () => {
  const route = useRoute<ResultsMnt3RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockWorldMnt);
  const price = Quizzes.find((q) => q.id === "4")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="3"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz4"
      setQuizLock={setQuizLockWorldMnt}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResultsMnt3;
