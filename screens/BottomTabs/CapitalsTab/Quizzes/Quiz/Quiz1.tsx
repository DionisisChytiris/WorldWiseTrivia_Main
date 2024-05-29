import React from "react";
import QuizMainTemplate from "../../../MainQuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz1 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsCapitals } = useAppSelector((state) => state.quiz1Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsCapitals}
      quizName="1"
      results="ResultsCpt1"
      status={initStatus}
    />
  );
};

export default Quiz1;
