import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions10En from '../../../../../data/worldMonuments/Questions/questions10En'

const Quiz10 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions10En} quizName='10' results='ResultsMnt10'  status={initStatus}/>
  )
};

export default Quiz10;