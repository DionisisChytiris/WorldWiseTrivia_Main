import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions9En from '../../../../../data/worldMonuments/Questions/questions9En'

const Quiz9 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions9En} quizName='9' results='ResultsMnt9'  status={initStatus}/>
  )
};

export default Quiz9;