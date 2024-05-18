import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz5 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz5ItemsMonuments} = useAppSelector((state)=>state.quiz5Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz5ItemsMonuments} quizName='5' results='ResultsMnt5'  status={initStatus}/>
  )
};

export default Quiz5;