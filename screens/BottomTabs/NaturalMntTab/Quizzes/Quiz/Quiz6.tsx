import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions6En from '../../../../../data/naturalMnts/Questions/questions6En'

const Quiz6 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz6ItemsMonuments } = useAppSelector(
    (state) => state.quiz6Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions6En}
      quizName="6"
      results="ResultsMnt6"
      loseScreen='LoseScreen6'
      status={initStatus}
    />
  );
};

export default Quiz6;
