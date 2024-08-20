import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz3 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz3ItemsMixed } = useAppSelector((state) => state.quiz3MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz3ItemsMixed}
      quizName="3"
      results="MixedRes3"
      loseScreen='MixedLoseScr3'
      status={initStatus}
    />
  );
};

export default Quiz3;
