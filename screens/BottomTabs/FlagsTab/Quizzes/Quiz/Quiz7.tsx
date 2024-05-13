import React from "react";
import QuizTemplate from "../QuizTemplate";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz7 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz7ItemsFlags} = useAppSelector((state)=>state.quiz7Flags)

  return <QuizMainTemplate dataQuiz={quiz7ItemsFlags} quizName='7' results='Results7' status={initStatus}/>;
};

export default Quiz7;