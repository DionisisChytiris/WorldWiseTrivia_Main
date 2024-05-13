import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz6 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz6ItemsCapitals} = useAppSelector((state)=>state.quiz6Capitals)

  return <QuizMainTemplate dataQuiz={quiz6ItemsCapitals} quizName='6' results='ResultsCpt6' status={initStatus}/>;
};

export default Quiz6;
 
 