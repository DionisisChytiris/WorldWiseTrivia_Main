import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz9 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz9ItemsFlags} = useAppSelector((state)=>state.quiz9Flags)

  return <QuizMainTemplate dataQuiz={quiz9ItemsFlags} quizName='9' results='Results9' status={initStatus}/>;
};

export default Quiz9;