import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions3En from '../../../../../data/naturalMnts/Questions/questions3En'

const Quiz3 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz3ItemsMonuments } = useAppSelector(
    (state) => state.quiz3Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions3En}
      quizName="3"
      results="ResultsMnt3"
      loseScreen='LoseScreen3'
      status={initStatus}
    />
  );
};

export default Quiz3;
