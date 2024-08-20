import { createSlice } from "@reduxjs/toolkit";
import questions7En from '../../data/mixedQuestions/Questions/questions7En'
import questions7El from '../../data/mixedQuestions/Questions/questions7El'
import questions7Es from '../../data/mixedQuestions/Questions/questions7Es'

const initialState = {
    quiz7ItemsMixed: questions7En
}

const MixedQuiz7Slice = createSlice({
    name: 'quiz7MixedQst',
    initialState,
    reducers: {
        quizMixed7En: ()=>{return {quiz7ItemsMixed: questions7En}},
        quizMixed7El: ()=>{return {quiz7ItemsMixed: questions7El}},
        quizMixed7Es: ()=>{return {quiz7ItemsMixed: questions7Es}},
    }
})

export const {quizMixed7En, quizMixed7El, quizMixed7Es} = MixedQuiz7Slice.actions
export default MixedQuiz7Slice.reducer