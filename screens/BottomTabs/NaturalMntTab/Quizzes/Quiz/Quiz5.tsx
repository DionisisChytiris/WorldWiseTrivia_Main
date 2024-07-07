import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions5En from '../../../../../data/naturalMnts/Questions/questions5En'

const Quiz5 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz5ItemsMonuments } = useAppSelector(
    (state) => state.quiz5Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions5En}
      quizName="5"
      results="ResultsMnt5"
      loseScreen='LoseScreen5'
      status={initStatus}
    />
  );
};

export default Quiz5;

