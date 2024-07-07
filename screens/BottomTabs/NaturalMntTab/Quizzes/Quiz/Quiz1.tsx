import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions1En from '../../../../../data/naturalMnts/Questions/questions1En'

const Quiz1 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsMonuments } = useAppSelector(
    (state) => state.quiz1Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions1En}
      quizName="1"
      results="ResultsMnt1"
      loseScreen='LoseScreen1'
      status={initStatus}
    />
  );
};

export default Quiz1;