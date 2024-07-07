import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions7En from '../../../../../data/naturalMnts/Questions/questions7En'

const Quiz7 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz7ItemsMonuments } = useAppSelector(
    (state) => state.quiz7Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions7En}
      quizName="7"
      results="ResultsMnt7"
      loseScreen='LoseScreen7'
      status={initStatus}
    />
  );
};

export default Quiz7;
