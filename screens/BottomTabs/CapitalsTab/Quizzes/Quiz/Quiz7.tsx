import React from "react";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz7 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz7ItemsCapitals } = useAppSelector((state) => state.quiz7Capitals);

  return (
    <QuizMainTemplate
      dataQuiz={quiz7ItemsCapitals}
      quizName="7"
      results="ResultsCpt7"
      loseScreen='LoseScreen7'
      status={initStatus}
    />
  );
};

export default Quiz7;
