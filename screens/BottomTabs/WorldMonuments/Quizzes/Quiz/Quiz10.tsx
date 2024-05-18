import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz10 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz10ItemsMonuments} = useAppSelector((state)=>state.quiz10Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz10ItemsMonuments} quizName='10' results='ResultsMnt10'  status={initStatus}/>
  )
};

export default Quiz10;