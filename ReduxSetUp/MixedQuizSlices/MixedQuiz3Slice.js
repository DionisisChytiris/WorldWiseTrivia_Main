import { createSlice } from "@reduxjs/toolkit";
import questions3En from '../../data/mixedQuestions/Questions/questions3En'
import questions3El from '../../data/mixedQuestions/Questions/questions3El'
import questions3Es from '../../data/mixedQuestions/Questions/questions3Es'

const initialState = {
    quiz3ItemsMixed: questions3En
}

const MixedQuiz3Slice = createSlice({
    name: 'quiz3MixedQst',
    initialState,
    reducers: {
        quizMixed3En: ()=>{return {quiz3ItemsMixed: questions3En}},
        quizMixed3El: ()=>{return {quiz3ItemsMixed: questions3El}},
        quizMixed3Es: ()=>{return {quiz3ItemsMixed: questions3Es}},
    }
})

export const {quizMixed3En, quizMixed3El, quizMixed3Es} = MixedQuiz3Slice.actions
export default MixedQuiz3Slice.reducer