import React from "react";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz9 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsCapitals } = useAppSelector((state) => state.quiz1Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsCapitals}
      quizName="9"
      results="MixedRes9"
      loseScreen='MixedLoseScr9'
      status={initStatus}
    />
  );
};

export default Quiz9;
