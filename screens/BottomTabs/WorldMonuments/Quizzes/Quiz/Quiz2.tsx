import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz2 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz2ItemsMonuments} = useAppSelector((state)=>state.quiz2Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz2ItemsMonuments} quizName='2' results='ResultsMnt2'  status={initStatus}/>
  )
};

export default Quiz2;