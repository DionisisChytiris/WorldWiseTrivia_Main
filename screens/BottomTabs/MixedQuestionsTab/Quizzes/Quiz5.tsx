import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz5 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz5ItemsMixed } = useAppSelector((state) => state.quiz5MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz5ItemsMixed}
      quizName="5"
      results="MixedRes5"
      loseScreen='MixedLoseScr5'
      status={initStatus}
    />
  );
};

export default Quiz5;