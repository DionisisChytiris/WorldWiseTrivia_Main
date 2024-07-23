import { createSlice } from "@reduxjs/toolkit";
import questions1El from '../../data/naturalMnts/Questions/questions1El'
import questions1En from '../../data/naturalMnts/Questions/questions1En'
import questions1Es from '../../data/naturalMnts/Questions/questions1Es'

const initialState = {
    quiz1ItemsNtrMnts: questions1En
} 

const NaturalMnt1Slice = createSlice({
    name: 'quiz1NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt1En: ()=>{return {quiz1ItemsNtrMnts: questions1En}},
        quizNtrMnt1El: ()=>{return {quiz1ItemsNtrMnts: questions1El}},
        quizNtrMnt1Es: ()=>{return {quiz1ItemsNtrMnts: questions1Es}},
    }
})

export const {quizNtrMnt1El, quizNtrMnt1En, quizNtrMnt1Es} = NaturalMnt1Slice.actions
export default NaturalMnt1Slice.reducer