import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";

const Quiz4 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz4ItemsMonuments} = useAppSelector((state)=>state.quiz4Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz4ItemsMonuments} quizName='4' results='ResultsMnt4'  status={initStatus}/>
  )
};

export default Quiz4;