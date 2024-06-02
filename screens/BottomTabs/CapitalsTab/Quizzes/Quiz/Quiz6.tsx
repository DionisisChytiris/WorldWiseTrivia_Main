import React from "react";
import QuizMainTemplate from '../../../Templates/MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";

const Quiz6 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz6ItemsCapitals} = useAppSelector((state)=>state.quiz6Capitals)

  return <QuizMainTemplate dataQuiz={quiz6ItemsCapitals} quizName='6' results='ResultsCpt6' status={initStatus}/>;
};

export default Quiz6;
 
 