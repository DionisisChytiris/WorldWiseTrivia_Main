import React from "react";
import QuizMainTemplate from '../../../Templates/MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store"

const Quiz8 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz8ItemsCapitals} = useAppSelector((state)=>state.quiz8Capitals)

  return <QuizMainTemplate dataQuiz={quiz8ItemsCapitals} quizName='8' results='ResultsCpt8' status={initStatus}/>;
};

export default Quiz8;
 
 