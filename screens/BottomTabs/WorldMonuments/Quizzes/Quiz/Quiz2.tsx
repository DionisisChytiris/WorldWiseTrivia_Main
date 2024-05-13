import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions2En from '../../../../../data/worldMonuments/Questions/questions2En'

const Quiz2 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  return (
    <QuizMainTemplate dataQuiz={questions2En} quizName='2' results='ResultsMnt2'  status={initStatus}/>
  )
};

export default Quiz2;
