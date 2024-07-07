import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions10En from '../../../../../data/naturalMnts/Questions/questions10En'

const Quiz10 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz10ItemsMonuments } = useAppSelector(
    (state) => state.quiz10Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions10En}
      quizName="10"
      results="ResultsMnt10"
      loseScreen='LoseScreen10'
      status={initStatus}
    />
  );
};

export default Quiz10;
