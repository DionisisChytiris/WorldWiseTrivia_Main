import React from "react";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz4 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz4ItemsCapitals } = useAppSelector((state) => state.quiz4Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz4ItemsCapitals}
      quizName="4"
      results="ResultsCpt4"
      loseScreen='LoseScreen4'
      status={initStatus}
    />
  );
};

export default Quiz4;
