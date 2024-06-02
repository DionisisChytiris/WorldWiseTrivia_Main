import React from "react";
import { useAppSelector } from "../../../../../ReduxSetUp/store";
import QuizMainTemplate from "../../../Templates/MainQuizTemplate";

const Quiz4 = () => {
  const {initStatus} = useAppSelector((state)=>state.quizStatus)
  const {quiz4ItemsFlags} = useAppSelector((state)=>state.quiz4Flags)

  return <QuizMainTemplate dataQuiz={quiz4ItemsFlags} quizName='4' results='Results4' status={initStatus}/>;
};

export default Quiz4;
