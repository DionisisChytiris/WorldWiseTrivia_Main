import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz2 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz2ItemsCapitals} = useAppSelector((state)=>state.quiz2Capitals)

  return <QuizMainTemplate dataQuiz={quiz2ItemsCapitals} quizName='2' results='ResultsCpt2' status={initStatus}/>;
};

export default Quiz2;
 