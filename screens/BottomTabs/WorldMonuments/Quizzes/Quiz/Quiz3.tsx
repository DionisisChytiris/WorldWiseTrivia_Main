import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz3 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz3ItemsMonuments} = useAppSelector((state)=>state.quiz3Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz3ItemsMonuments} quizName='3' results='ResultsMnt3'  status={initStatus}/>
  )
};

export default Quiz3;