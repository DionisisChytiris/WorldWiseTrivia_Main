import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz3 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz3ItemsFlags } = useAppSelector((state) => state.quiz3Flags);

  return (
    <QuizMainTemplate
      dataQuiz={quiz3ItemsFlags}
      quizName="3"
      results="Results3"
      loseScreen='LoseScreen3'
      status={initStatus}
    />
  );
};

export default Quiz3;
