import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz10 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz10ItemsFlags} = useAppSelector((state)=>state.quiz10Flags)

  return <QuizMainTemplate dataQuiz={quiz10ItemsFlags} quizName='10' results='Results10' status={initStatus}/>;
};

export default Quiz10;