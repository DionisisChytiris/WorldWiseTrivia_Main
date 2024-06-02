import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz10 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz10ItemsMonuments} = useAppSelector((state)=>state.quiz10Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz10ItemsMonuments} quizName='10' results='ResultsMnt10'  status={initStatus}/>
  )
};

export default Quiz10;