import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";
import questions5En from '../../../../../data/naturalMnts/Questions/questions5En'

const Quiz5 = () => {
  const { initStatus } = useAppSelector((state) => state.quizStatus);
  const { quiz5ItemsNtrMnts } = useAppSelector(
    (state) => state.quiz5NaturalMnts
  );
  return (
    <QuizMainTemplate
      dataQuiz={quiz5ItemsNtrMnts }
      quizName="5"
      results="ResultsMnt5"
      loseScreen='LoseScreen5'
      status={initStatus}
    />
  );
};

export default Quiz5;

