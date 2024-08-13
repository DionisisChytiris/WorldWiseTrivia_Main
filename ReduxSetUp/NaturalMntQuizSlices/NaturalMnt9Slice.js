import { createSlice } from "@reduxjs/toolkit";
import questions9El from '../../data/naturalMnts/Questions/questions9El'
import questions9En from '../../data/naturalMnts/Questions/questions9En'
import questions9Es from '../../data/naturalMnts/Questions/questions9Es'

const initialState = {
    quiz9ItemsNtrMnts: questions9En
}

const NaturalMnt9Slice = createSlice({
    name: 'quiz9NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt9En: ()=>{return {quiz9ItemsNtrMnts: questions9En}},
        quizNtrMnt9El: ()=>{return {quiz9ItemsNtrMnts: questions9El}},
        quizNtrMnt9Es: ()=>{return {quiz9ItemsNtrMnts: questions9Es}},
    }
})

export const {quizNtrMnt9El, quizNtrMnt9En, quizNtrMnt9Es} = NaturalMnt9Slice.actions
export default NaturalMnt9Slice.reducer