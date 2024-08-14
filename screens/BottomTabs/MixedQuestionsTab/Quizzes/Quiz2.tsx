import React from "react";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz2 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsCapitals } = useAppSelector((state) => state.quiz1Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsCapitals}
      quizName="2"
      results="MixedRes2"
      loseScreen='MixedLoseScr2'
      status={initStatus}
    />
  );
};

export default Quiz2;
