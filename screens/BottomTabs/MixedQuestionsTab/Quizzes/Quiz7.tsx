import React from "react";
// import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import QuizMainTemplate from "../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../ReduxSetUp/store";

const Quiz7 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz7ItemsMixed } = useAppSelector((state) => state.quiz7MixedQst);

  return (
    <QuizMainTemplate
      dataQuiz={quiz7ItemsMixed}
      quizName="7"
      results="MixedRes7"
      loseScreen='MixedLoseScr7'
      status={initStatus}
    />
  );
};

export default Quiz7;