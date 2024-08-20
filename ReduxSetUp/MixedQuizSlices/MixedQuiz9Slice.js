import { createSlice } from "@reduxjs/toolkit";
import questions9En from '../../data/mixedQuestions/Questions/questions9En'
import questions9El from '../../data/mixedQuestions/Questions/questions9El'
import questions9Es from '../../data/mixedQuestions/Questions/questions9Es'

const initialState = {
    quiz9ItemsMixed: questions9En
}

const MixedQuiz9Slice = createSlice({
    name: 'quiz9MixedQst',
    initialState,
    reducers: {
        quizMixed9En: ()=>{return {quiz9ItemsMixed: questions9En}},
        quizMixed9El: ()=>{return {quiz9ItemsMixed: questions9El}},
        quizMixed9Es: ()=>{return {quiz9ItemsMixed: questions9Es}},
    }
})

export const {quizMixed9En, quizMixed9El, quizMixed9Es} = MixedQuiz9Slice.actions
export default MixedQuiz9Slice.reducer