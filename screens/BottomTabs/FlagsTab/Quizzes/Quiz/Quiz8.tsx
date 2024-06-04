import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz8 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz8ItemsFlags } = useAppSelector((state) => state.quiz8Flags);

  return (
    <QuizMainTemplate
      dataQuiz={quiz8ItemsFlags}
      quizName="8"
      results="Results8"
      loseScreen='LoseScreen8'
      status={initStatus}
    />
  );
};

export default Quiz8;
