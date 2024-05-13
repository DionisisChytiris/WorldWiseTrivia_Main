import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions4En from '../../../../../data/worldMonuments/Questions/questions4En'

const Quiz4 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions4En} quizName='4' results='ResultsMnt4'  status={initStatus}/>
  )
};

export default Quiz4;