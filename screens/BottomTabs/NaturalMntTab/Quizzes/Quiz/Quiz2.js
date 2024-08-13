import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions2En from '../../../../../data/naturalMnts/Questions/questions2En'

const Quiz2 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz2ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz2NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz2ItemsNtrMnts}
      quizName="2"
      results="ResNrtMnt2"
      loseScreen='ResLoseScr2'
      status={initStatus}
    />
  );
};

export default Quiz2;