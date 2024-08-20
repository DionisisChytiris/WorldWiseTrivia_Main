import { createSlice } from "@reduxjs/toolkit";
import questions6En from '../../data/mixedQuestions/Questions/questions6En'
import questions6El from '../../data/mixedQuestions/Questions/questions6El'
import questions6Es from '../../data/mixedQuestions/Questions/questions6Es'

const initialState = {
    quiz6ItemsMixed: questions6En
}

const MixedQuiz6Slice = createSlice({
    name: 'quiz6MixedQst',
    initialState,
    reducers: {
        quizMixed6En: ()=>{return {quiz6ItemsMixed: questions6En}},
        quizMixed6El: ()=>{return {quiz6ItemsMixed: questions6El}},
        quizMixed6Es: ()=>{return {quiz6ItemsMixed: questions6Es}},
    }
})

export const {quizMixed6En, quizMixed6El, quizMixed6Es} = MixedQuiz6Slice.actions
export default MixedQuiz6Slice.reducer