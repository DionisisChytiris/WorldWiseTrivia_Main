import { createSlice } from "@reduxjs/toolkit";
import questions6El from '../../data/naturalMnts/Questions/questions6El'
import questions6En from '../../data/naturalMnts/Questions/questions6En'
import questions6Es from '../../data/naturalMnts/Questions/questions6Es'

const initialState = {
    quiz6ItemsNtrMnts: questions6En
}

const NaturalMnt6Slice = createSlice({
    name: 'quiz6NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt6En: ()=>{return {quiz6ItemsNtrMnts: questions6En}},
        quizNtrMnt6El: ()=>{return {quiz6ItemsNtrMnts: questions6El}},
        quizNtrMnt6Es: ()=>{return {quiz6ItemsNtrMnts: questions6Es}},
    }
})

export const {quizNtrMnt6El, quizNtrMnt6En, quizNtrMnt6Es} = NaturalMnt6Slice.actions
export default NaturalMnt6Slice.reducer