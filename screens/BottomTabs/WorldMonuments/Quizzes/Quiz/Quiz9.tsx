import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz9 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz9ItemsMonuments} = useAppSelector((state)=>state.quiz9Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz9ItemsMonuments} quizName='9' results='ResultsMnt9'  status={initStatus}/>
  )
};

export default Quiz9;