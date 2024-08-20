import { createSlice } from "@reduxjs/toolkit";
import questions5En from '../../data/mixedQuestions/Questions/questions5En'
import questions5El from '../../data/mixedQuestions/Questions/questions5El'
import questions5Es from '../../data/mixedQuestions/Questions/questions5Es'

const initialState = {
    quiz5ItemsMixed: questions5En
}

const MixedQuiz5Slice = createSlice({
    name: 'quiz5MixedQst',
    initialState,
    reducers: {
        quizMixed5En: ()=>{return {quiz5ItemsMixed: questions5En}},
        quizMixed5El: ()=>{return {quiz5ItemsMixed: questions5El}},
        quizMixed5Es: ()=>{return {quiz5ItemsMixed: questions5Es}},
    }
})

export const {quizMixed5En, quizMixed5El, quizMixed5Es} = MixedQuiz5Slice.actions
export default MixedQuiz5Slice.reducer