import { createSlice } from "@reduxjs/toolkit";
import questions3El from '../../data/naturalMnts/Questions/questions3El'
import questions3En from '../../data/naturalMnts/Questions/questions3En'
import questions3Es from '../../data/naturalMnts/Questions/questions3Es'

const initialState = {
    quiz3ItemsNtrMnts: questions3En
}

const NaturalMnt3Slice = createSlice({
    name: 'quiz3NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt3En: ()=>{return {quiz3ItemsNtrMnts: questions3En}},
        quizNtrMnt3El: ()=>{return {quiz3ItemsNtrMnts: questions3El}},
        quizNtrMnt3Es: ()=>{return {quiz3ItemsNtrMnts: questions3Es}},
    }
})

export const {quizNtrMnt3El, quizNtrMnt3En, quizNtrMnt3Es} = NaturalMnt3Slice.actions
export default NaturalMnt3Slice.reducer