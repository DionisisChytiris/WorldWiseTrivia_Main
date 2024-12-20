import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions6En from '../../../../../data/naturalMnts/Questions/questions6En'

const Quiz6 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz6ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz6NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz6ItemsNtrMnts }
      quizName="6"
      results="ResNrtMnt6"
      loseScreen='ResLoseScr6'
      status={initStatus}
    />
  );
};

export default Quiz6;
