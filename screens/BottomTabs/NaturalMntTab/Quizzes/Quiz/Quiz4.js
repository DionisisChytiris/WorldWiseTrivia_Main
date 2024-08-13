import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions4En from '../../../../../data/naturalMnts/Questions/questions4En'

const Quiz4 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz4ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz4NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz4ItemsNtrMnts}
      quizName="4"
      results="ResNrtMnt4"
      loseScreen='ResLoseScr4'
      status={initStatus}
    />
  );
};

export default Quiz4;
