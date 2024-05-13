import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions3En from '../../../../../data/worldMonuments/Questions/questions3En'

const Quiz3 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions3En} quizName='3' results='ResultsMnt3'  status={initStatus}/>
  )
};

export default Quiz3;