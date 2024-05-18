import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz2 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz2ItemsMonuments} = useAppSelector((state)=>state.quiz2Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz2ItemsMonuments} quizName='2' results='ResultsMnt2'  status={initStatus}/>
  )
};

export default Quiz2;