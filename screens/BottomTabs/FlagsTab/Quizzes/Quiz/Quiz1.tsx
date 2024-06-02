import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz1 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz1ItemsFlags} = useAppSelector((state)=>state.quiz1Flags)

  return <QuizMainTemplate dataQuiz={quiz1ItemsFlags} quizName='1' results='Results1' status={initStatus}/>;
};

export default Quiz1;
 