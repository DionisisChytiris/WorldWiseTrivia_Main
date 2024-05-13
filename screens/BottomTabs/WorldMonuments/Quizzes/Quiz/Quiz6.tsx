import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions6En from '../../../../../data/worldMonuments/Questions/questions6En'

const Quiz6 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions6En} quizName='6' results='ResultsMnt6'  status={initStatus}/>
  )
};

export default Quiz6;