import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions5En from '../../../../../data/worldMonuments/Questions/questions5En'

const Quiz5 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions5En} quizName='5' results='ResultsMnt5'  status={initStatus}/>
  )
};

export default Quiz5;