import { createSlice } from "@reduxjs/toolkit";
import questions7El from '../../data/naturalMnts/Questions/questions7El'
import questions7En from '../../data/naturalMnts/Questions/questions7En'
import questions7Es from '../../data/naturalMnts/Questions/questions7Es'

const initialState = {
    quiz7ItemsNtrMnts: questions7En
}

const NaturalMnt7Slice = createSlice({
    name: 'quiz7NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt7En: ()=>{return {quiz7ItemsNtrMnts: questions7En}},
        quizNtrMnt7El: ()=>{return {quiz7ItemsNtrMnts: questions7El}},
        quizNtrMnt7Es: ()=>{return {quiz7ItemsNtrMnts: questions7Es}},
    }
})

export const {quizNtrMnt7El, quizNtrMnt7En, quizNtrMnt7Es} = NaturalMnt7Slice.actions
export default NaturalMnt7Slice.reducer