import { createSlice } from "@reduxjs/toolkit";
import questions8En from '../../data/mixedQuestions/Questions/questions8En'
import questions8El from '../../data/mixedQuestions/Questions/questions8El'
import questions8Es from '../../data/mixedQuestions/Questions/questions8Es'

const initialState = {
    quiz8ItemsMixed: questions8En
}

const MixedQuiz8Slice = createSlice({
    name: 'quiz8MixedQst',
    initialState,
    reducers: {
        quizMixed8En: ()=>{return {quiz8ItemsMixed: questions8En}},
        quizMixed8El: ()=>{return {quiz8ItemsMixed: questions8El}},
        quizMixed8Es: ()=>{return {quiz8ItemsMixed: questions8Es}},
    }
})

export const {quizMixed8En, quizMixed8El, quizMixed8Es} = MixedQuiz8Slice.actions
export default MixedQuiz8Slice.reducer