import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz4 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz4ItemsMixed } = useAppSelector((state) => state.quiz4MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz4ItemsMixed}
      quizName="4"
      results="MixedRes4"
      loseScreen='MixedLoseScr4'
      status={initStatus}
    />
  );
};

export default Quiz4;