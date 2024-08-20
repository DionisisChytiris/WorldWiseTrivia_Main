import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz2 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz2ItemsMixed } = useAppSelector((state) => state.quiz2MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz2ItemsMixed}
      quizName="2"
      results="MixedRes2"
      loseScreen='MixedLoseScr2'
      status={initStatus}
    />
  );
};

export default Quiz2;
