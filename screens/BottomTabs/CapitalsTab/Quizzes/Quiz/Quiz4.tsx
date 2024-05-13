import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import question3El from "../../../../../data/capitals/Questions/questions3El";

const Quiz4 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz4ItemsCapitals} = useAppSelector((state)=>state.quiz4Capitals)

  return <QuizMainTemplate dataQuiz={quiz4ItemsCapitals} quizName='4' results='ResultsCpt4' status={initStatus}/>;
};

export default Quiz4;
 