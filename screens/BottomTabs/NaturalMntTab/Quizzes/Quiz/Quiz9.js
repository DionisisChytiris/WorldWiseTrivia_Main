import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions9En from '../../../../../data/naturalMnts/Questions/questions9En'

const Quiz9 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz9ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz9NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz9ItemsNtrMnts}
      quizName="9"
      results="ResNrtMnt9"
      loseScreen='ResLoseScr9'
      status={initStatus}
    />
  );
};

export default Quiz9;
