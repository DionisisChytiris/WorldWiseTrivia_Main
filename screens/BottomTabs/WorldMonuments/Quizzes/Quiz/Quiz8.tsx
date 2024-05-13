import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions8En from '../../../../../data/worldMonuments/Questions/questions8En'

const Quiz8 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions8En} quizName='8' results='ResultsMnt8'  status={initStatus}/>
  )
};

export default Quiz8;