import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions8En from '../../../../../data/naturalMnts/Questions/questions8En'

const Quiz8 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz8ItemsMonuments } = useAppSelector(
    (state) => state.quiz8Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions8En}
      quizName="8"
      results="ResultsMnt8"
      loseScreen='LoseScreen8'
      status={initStatus}
    />
  );
};

export default Quiz8;
