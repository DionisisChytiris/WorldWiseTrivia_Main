import React from "react";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz9 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz9ItemsCapitals } = useAppSelector((state) => state.quiz9Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz9ItemsCapitals}
      quizName="9"
      results="ResultsCpt9"
      loseScreen='LoseScreen9'
      status={initStatus}
    />
  );
};

export default Quiz9;
