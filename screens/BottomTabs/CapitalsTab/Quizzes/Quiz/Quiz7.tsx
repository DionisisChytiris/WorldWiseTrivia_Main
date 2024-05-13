import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz7 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz7ItemsCapitals} = useAppSelector((state)=>state.quiz7Capitals)

  return <QuizMainTemplate dataQuiz={quiz7ItemsCapitals} quizName='7' results='ResultsCpt7' status={initStatus}/>;
};

export default Quiz7;
 