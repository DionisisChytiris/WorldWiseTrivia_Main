import { createSlice } from "@reduxjs/toolkit";
import questions4El from '../../data/naturalMnts/Questions/questions4El'
import questions4En from '../../data/naturalMnts/Questions/questions4En'
import questions4Es from '../../data/naturalMnts/Questions/questions4Es'

const initialState = {
    quiz4ItemsNtrMnts: questions4El
}

const NaturalMnt4Slice = createSlice({
    name: 'quiz4NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt4En: ()=>{return {quiz4ItemsNtrMnts: questions4En}},
        quizNtrMnt4El: ()=>{return {quiz4ItemsNtrMnts: questions4El}},
        quizNtrMnt4Es: ()=>{return {quiz4ItemsNtrMnts: questions4Es}},
    }
})

export const {quizNtrMnt4El, quizNtrMnt4En, quizNtrMnt4Es} = NaturalMnt4Slice.actions
export default NaturalMnt4Slice.reducer