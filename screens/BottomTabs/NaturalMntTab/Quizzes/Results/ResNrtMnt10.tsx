import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../../Templates/MainResultsTemplate";
import { setQuizLockNaturalMnt } from "../../../../../ReduxSetUp/QuizLockState/NaturalMntQuizLockSlice";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import Quizzes from "../../../../../data/naturalMnts/NaturalQuizHome";

interface RouteParams {
  score: number;
}

type ResNrtMnt10RouteProp = RouteProp<{ params: RouteParams }, "params">;

const ResNrtMnt10: React.FC = () => {
  const route = useRoute<ResNrtMnt10RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockNaturalMnt);
  const price = Quizzes.find((q) => q.id === "2")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="10"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum=""
      setQuizLock={setQuizLockNaturalMnt}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default ResNrtMnt10;
