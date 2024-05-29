import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz1 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsMonuments } = useAppSelector(
    (state) => state.quiz1Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz1ItemsMonuments}
      quizName="1"
      results="ResultsMnt1"
      status={initStatus}
    />
  );
};

export default Quiz1;
