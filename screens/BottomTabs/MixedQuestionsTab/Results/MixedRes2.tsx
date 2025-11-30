import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import MainResultsTemplate from "../../Templates/MainResultsTemplate";
import { setQuizLockMixed } from "../../../../ReduxSetUp/QuizLockState/MixedQuizLockSlice";
import { useAppSelector } from "../../../../ReduxSetUp/store";
import Quizzes from "../../../../data/mixedQuestions/MixedQuizHome";

interface RouteParams {
  score: number;
}

type MixedRes2RouteProp = RouteProp<{ params: RouteParams }, "params">;

const MixedRes2: React.FC = () => {
  const route = useRoute<MixedRes2RouteProp>();
  const correct = route.params?.score ?? 0;
  const wrong = 100 - correct;
  const crAns = correct * 0.1 + "/10";
  const wrnAns = wrong * 0.1 + "/10";
  const data = [
    { value: wrong, color: "magenta" },
    { value: correct, color: "lightgreen" },
  ];
  const quizLocks = useAppSelector((state) => state.quizLockMixed);
  const price = Quizzes.find((q) => q.id === "3")?.price ?? 0;

  return (
    <MainResultsTemplate
      number="2"
      data={data}
      percentage={correct}
      numCorAns={crAns}
      numWrnAns={wrnAns}
      quizNum="Quiz3"
      setQuizLock={setQuizLockMixed}
      quizLocks={quizLocks}
      coinsTest={price}
      quizPrice={price}
    />
  );
};

export default MixedRes2;
