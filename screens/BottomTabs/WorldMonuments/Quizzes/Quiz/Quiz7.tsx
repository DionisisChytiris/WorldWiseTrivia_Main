import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions7En from '../../../../../data/worldMonuments/Questions/questions7En'

const Quiz7 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions7En} quizName='7' results='ResultsMnt7'  status={initStatus}/>
  )
};

export default Quiz7;