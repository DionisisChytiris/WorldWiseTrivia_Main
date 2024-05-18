import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../MainQuizTemplate";
import QuizTemplate from "../QuizTemplate";
import questions1En from '../../../../../data/worldMonuments/Questions/questions1En'

const Quiz7 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz7ItemsMonuments} = useAppSelector((state)=>state.quiz7Monuments)
  return (
    <QuizMainTemplate dataQuiz={quiz7ItemsMonuments} quizName='7' results='ResultsMnt7'  status={initStatus}/>
  )
};

export default Quiz7;