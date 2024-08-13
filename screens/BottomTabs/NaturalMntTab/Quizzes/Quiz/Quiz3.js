import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions3En from '../../../../../data/naturalMnts/Questions/questions3En'

const Quiz3 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz3ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz3NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz3ItemsNtrMnts}
      quizName="3"
      results="ResNrtMnt3"
      loseScreen='ResLoseScr3'
      status={initStatus}
    />
  );
};

export default Quiz3;
