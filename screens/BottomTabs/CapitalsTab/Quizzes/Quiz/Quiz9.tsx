import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz9 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz9ItemsCapitals} = useAppSelector((state)=>state.quiz9Capitals)

  return <QuizMainTemplate dataQuiz={quiz9ItemsCapitals} quizName='9' results='ResultsCpt9' status={initStatus}/>;
};

export default Quiz9;
 