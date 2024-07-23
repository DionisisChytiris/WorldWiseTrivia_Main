import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz2 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz2ItemsFlags } = useAppSelector((state) => state.quiz2Flags);

  return (
    <QuizMainTemplate
      dataQuiz={quiz2ItemsFlags}
      quizName="2"
      results="Results2"
      loseScreen='LoseScreen2'
      status={initStatus}
    />
  );
};

export default Quiz2;
