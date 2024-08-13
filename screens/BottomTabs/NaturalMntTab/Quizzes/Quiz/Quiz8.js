import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions8En from '../../../../../data/naturalMnts/Questions/questions8En'

const Quiz8 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz8ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz8NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz8ItemsNtrMnts }
      quizName="8"
      results="ResNrtMnt8"
      loseScreen='ResLoseScr8'
      status={initStatus}
    />
  );
};

export default Quiz8;
