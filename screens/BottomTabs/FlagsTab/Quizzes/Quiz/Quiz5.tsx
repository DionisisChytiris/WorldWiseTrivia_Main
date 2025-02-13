import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz5 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz5ItemsFlags } = useAppSelector((state) => state.quiz5Flags);

  return (
    <QuizMainTemplate
      dataQuiz={quiz5ItemsFlags}
      quizName="5"
      results="Results5"
      loseScreen='LoseScreen5'
      status={initStatus}
    />
  );
};

export default Quiz5;
