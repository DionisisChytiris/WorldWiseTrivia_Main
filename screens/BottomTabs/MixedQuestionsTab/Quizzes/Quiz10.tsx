import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz10 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz10ItemsMixed } = useAppSelector((state) => state.quiz10MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz10ItemsMixed}
      quizName="10"
      results="MixedRes10"
      loseScreen='MixedLoseScr10'
      status={initStatus}
    />
  );
};

export default Quiz10;
