import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz9 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz9ItemsMixed } = useAppSelector((state) => state.quiz9MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz9ItemsMixed}
      quizName="9"
      results="MixedRes9"
      loseScreen='MixedLoseScr9'
      status={initStatus}
    />
  );
};

export default Quiz9;
