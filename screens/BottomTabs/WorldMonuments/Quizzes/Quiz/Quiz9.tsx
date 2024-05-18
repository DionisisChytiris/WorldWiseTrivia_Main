import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz9 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz9ItemsMonuments} = useAppSelector((state)=>state.quiz9Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz9ItemsMonuments} quizName='9' results='ResultsMnt9'  status={initStatus}/>
  )
};

export default Quiz9;