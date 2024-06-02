import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz8 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz8ItemsMonuments} = useAppSelector((state)=>state.quiz8Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz8ItemsMonuments} quizName='8' results='ResultsMnt8'  status={initStatus}/>
  )
};

export default Quiz8;