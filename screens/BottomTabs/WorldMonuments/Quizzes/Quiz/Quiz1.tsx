import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz1 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions1En} quizName='1' results='ResultsMnt1'  status={initStatus}/>
  )
};

export default Quiz1;
