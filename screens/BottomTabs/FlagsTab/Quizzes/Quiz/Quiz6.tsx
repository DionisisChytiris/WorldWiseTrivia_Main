import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz6 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz6ItemsFlags} = useAppSelector((state)=>state.quiz6Flags)

  return <QuizMainTemplate dataQuiz={quiz6ItemsFlags} quizName='6' results='Results6' status={initStatus}/>;
};

export default Quiz6;