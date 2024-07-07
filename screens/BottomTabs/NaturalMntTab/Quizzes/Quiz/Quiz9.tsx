import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions9En from '../../../../../data/naturalMnts/Questions/questions9En'

const Quiz9 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz9ItemsMonuments } = useAppSelector(
    (state) => state.quiz9Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions9En}
      quizName="9"
      results="ResultsMnt9"
      loseScreen='LoseScreen9'
      status={initStatus}
    />
  );
};

export default Quiz9;
