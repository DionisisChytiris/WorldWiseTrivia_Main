import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz3 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz3ItemsCapitals} = useAppSelector((state)=>state.quiz3Capitals)

  return <QuizMainTemplate dataQuiz={quiz3ItemsCapitals} quizName='3' results='ResultsCpt3' status={initStatus}/>;
};

export default Quiz3;
 