import { createSlice } from "@reduxjs/toolkit";
import questions4En from '../../data/mixedQuestions/Questions/questions4En'
import questions4El from '../../data/mixedQuestions/Questions/questions4El'
import questions4Es from '../../data/mixedQuestions/Questions/questions4Es'

const initialState = {
    quiz4ItemsMixed: questions4En
}

const MixedQuiz4Slice = createSlice({
    name: 'quiz4MixedQst',
    initialState,
    reducers: {
        quizMixed4En: ()=>{return {quiz4ItemsMixed: questions4En}},
        quizMixed4El: ()=>{return {quiz4ItemsMixed: questions4El}},
        quizMixed4Es: ()=>{return {quiz4ItemsMixed: questions4Es}},
    }
})

export const {quizMixed4En, quizMixed4El, quizMixed4Es} = MixedQuiz4Slice.actions
export default MixedQuiz4Slice.reducer