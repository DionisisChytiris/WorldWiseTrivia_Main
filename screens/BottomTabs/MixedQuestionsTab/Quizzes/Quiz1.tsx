import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz1 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsMixed } = useAppSelector((state) => state.quiz1MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsMixed}
      quizName="1"
      results="MixedRes1"
      loseScreen='MixedLoseScr1'
      status={initStatus}
    />
  );
};

export default Quiz1;
