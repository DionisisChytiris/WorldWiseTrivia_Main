import React from "react";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz6 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsCapitals } = useAppSelector((state) => state.quiz1Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsCapitals}
      quizName="6"
      results="MixedRes6"
      loseScreen='MixedLoseScr6'
      status={initStatus}
    />
  );
};

export default Quiz6;
