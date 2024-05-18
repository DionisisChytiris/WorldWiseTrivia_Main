import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz6 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz6ItemsMonuments} = useAppSelector((state)=>state.quiz6Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz6ItemsMonuments} quizName='6' results='ResultsMnt6'  status={initStatus}/>
  )
};

export default Quiz6;