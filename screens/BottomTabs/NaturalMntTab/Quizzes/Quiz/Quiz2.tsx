import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions2En from '../../../../../data/naturalMnts/Questions/questions2En'

const Quiz2 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz2ItemsMonuments } = useAppSelector(
    (state) => state.quiz2Monuments
  );
  return (
    <QuizMainTemplate
      dataQuiz={questions2En}
      quizName="2"
      results="ResultsMnt2"
      loseScreen='LoseScreen2'
      status={initStatus}
    />
  );
};

export default Quiz2;