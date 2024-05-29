import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz5 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz5ItemsCapitals} = useAppSelector((state)=>state.quiz5Capitals)

  return <QuizMainTemplate dataQuiz={quiz5ItemsCapitals} quizName='5' results='ResultsCpt5' status={initStatus}/>;
};

export default Quiz5;
 