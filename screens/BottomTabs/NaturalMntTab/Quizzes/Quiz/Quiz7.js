import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions7En from '../../../../../data/naturalMnts/Questions/questions7En'

const Quiz7 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz7ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz7NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz7ItemsNtrMnts }
      quizName="7"
      results="ResNrtMnt7"
      loseScreen='ResLoseScr7'
      status={initStatus}
    />
  );
};

export default Quiz7;
