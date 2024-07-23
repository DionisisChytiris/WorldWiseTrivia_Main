import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions1En from '../../../../../data/naturalMnts/Questions/questions1En'

const Quiz1 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz1ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz1NaturalMnts
  );
  return (
    <QuizMainTemplate
      // dataQuiz={questions1En}
      dataQuiz={quiz1ItemsNtrMnts}
      quizName="1"
      results="ResultsMnt1"
      loseScreen='LoseScreen1'
      status={initStatus}
    />
  );
};

export default Quiz1;