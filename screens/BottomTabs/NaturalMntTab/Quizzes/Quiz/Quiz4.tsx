import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions4En from '../../../../../data/naturalMnts/Questions/questions4En'

const Quiz4 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz4ItemsMonuments } = useAppSelector(
    (state) => state.quiz4Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions4En}
      quizName="4"
      results="ResultsMnt4"
      loseScreen='LoseScreen4'
      status={initStatus}
    />
  );
};

export default Quiz4;
