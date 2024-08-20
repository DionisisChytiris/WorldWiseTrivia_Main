import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz6 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz6ItemsMixed } = useAppSelector((state) => state.quiz6MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz6ItemsMixed}
      quizName="6"
      results="MixedRes6"
      loseScreen='MixedLoseScr6'
      status={initStatus}
    />
  );
};

export default Quiz6;