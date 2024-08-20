import { createSlice } from "@reduxjs/toolkit";
import questions2En from '../../data/mixedQuestions/Questions/questions2En'
import questions2El from '../../data/mixedQuestions/Questions/questions2El'
import questions2Es from '../../data/mixedQuestions/Questions/questions2Es'

const initialState = {
    quiz2ItemsMixed: questions2En
}

const MixedQuiz2Slice = createSlice({
    name: 'quiz2MixedQst',
    initialState,
    reducers: {
        quizMixed2En: ()=>{return {quiz2ItemsMixed: questions2En}},
        quizMixed2El: ()=>{return {quiz2ItemsMixed: questions2El}},
        quizMixed2Es: ()=>{return {quiz2ItemsMixed: questions2Es}},
    }
})

export const {quizMixed2En, quizMixed2El, quizMixed2Es} = MixedQuiz2Slice.actions
export default MixedQuiz2Slice.reducer