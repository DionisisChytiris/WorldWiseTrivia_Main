import React from "react";
import QuizMainTemplate from '../../../MainQuizTemplate'
import { useAppSelector } from "../../../../../ReduxSetUp/store";
// import QuizTemplate from "../QuizTemplate";
// import {useSelector} from 'react-redux'
// import { useNavigation, useRoute } from "@react-navigation/native";

const Quiz1 = () => {
  // const route = useRoute();
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz1ItemsCapitals} = useAppSelector((state)=>state.quiz1Capitals)

  return <QuizMainTemplate dataQuiz={quiz1ItemsCapitals} quizName='1' results='ResultsCpt1' status={initStatus}/>;
};

export default Quiz1;
 