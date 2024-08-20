import { createSlice } from "@reduxjs/toolkit";
import questions1En from '../../data/mixedQuestions/Questions/questions1En'
import questions1El from '../../data/mixedQuestions/Questions/questions1El'
import questions1Es from '../../data/mixedQuestions/Questions/questions1Es'

const initialState = {
    quiz1ItemsMixed: questions1En
}

const MixedQuiz1Slice = createSlice({
    name: 'quiz1MixedQst',
    initialState,
    reducers: {
        quizMixed1En: ()=>{return {quiz1ItemsMixed: questions1En}},
        quizMixed1El: ()=>{return {quiz1ItemsMixed: questions1El}},
        quizMixed1Es: ()=>{return {quiz1ItemsMixed: questions1Es}},
    }
})

export const {quizMixed1En, quizMixed1El, quizMixed1Es} = MixedQuiz1Slice.actions
export default MixedQuiz1Slice.reducer