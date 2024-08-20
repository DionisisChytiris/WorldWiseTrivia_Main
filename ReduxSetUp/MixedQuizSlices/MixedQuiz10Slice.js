import { createSlice } from "@reduxjs/toolkit";
import questions10En from '../../data/mixedQuestions/Questions/questions10En'
import questions10El from '../../data/mixedQuestions/Questions/questions10El'
import questions10Es from '../../data/mixedQuestions/Questions/questions10Es'

const initialState = {
    quiz10ItemsMixed: questions10En
}

const MixedQuiz10Slice = createSlice({
    name: 'quiz10MixedQst',
    initialState,
    reducers: {
        quizMixed10En: ()=>{return {quiz10ItemsMixed: questions10En}},
        quizMixed10El: ()=>{return {quiz10ItemsMixed: questions10El}},
        quizMixed10Es: ()=>{return {quiz10ItemsMixed: questions10Es}},
    }
})

export const {quizMixed10En, quizMixed10El, quizMixed10Es} = MixedQuiz10Slice.actions
export default MixedQuiz10Slice.reducer