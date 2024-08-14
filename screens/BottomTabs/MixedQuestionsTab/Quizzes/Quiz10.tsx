import React from "react";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz10 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsCapitals } = useAppSelector((state) => state.quiz1Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsCapitals}
      quizName="10"
      results="MixedRes10"
      loseScreen='MixedLoseScr10'
      status={initStatus}
    />
  );
};

export default Quiz10;
