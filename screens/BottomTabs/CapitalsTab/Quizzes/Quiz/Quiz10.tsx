import React from "react";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz10 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz10ItemsCapitals } = useAppSelector(
    (state) => state.quiz10Capitals
  );

  return (
    <QuizMainTemplate
      dataQuiz={quiz10ItemsCapitals}
      quizName="10"
      results="ResultsCpt10"
      loseScreen='LoseScreen10'
      status={initStatus}
    />
  );
};

export default Quiz10;
