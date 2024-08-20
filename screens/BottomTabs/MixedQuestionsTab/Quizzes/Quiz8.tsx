import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz8 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz8ItemsMixed } = useAppSelector((state) => state.quiz8MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz8ItemsMixed}
      quizName="8"
      results="MixedRes8"
      loseScreen='MixedLoseScr8'
      status={initStatus}
    />
  );
};

export default Quiz8;