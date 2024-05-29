import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz3 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz3ItemsMonuments} = useAppSelector((state)=>state.quiz3Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz3ItemsMonuments} quizName='3' results='ResultsMnt3'  status={initStatus}/>
  )
};

export default Quiz3;