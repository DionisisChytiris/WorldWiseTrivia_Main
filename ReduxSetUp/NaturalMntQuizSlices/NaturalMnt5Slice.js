import { createSlice } from "@reduxjs/toolkit";
import questions5El from '../../data/naturalMnts/Questions/questions5El'
import questions5En from '../../data/naturalMnts/Questions/questions5En'
import questions5Es from '../../data/naturalMnts/Questions/questions5Es'

const initialState = {
    quiz5ItemsNtrMnts: questions5El
}

const NaturalMnt5Slice = createSlice({
    name: 'quiz5NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt5En: ()=>{return {quiz5ItemsNtrMnts: questions5En}},
        quizNtrMnt5El: ()=>{return {quiz5ItemsNtrMnts: questions5El}},
        quizNtrMnt5Es: ()=>{return {quiz5ItemsNtrMnts: questions5Es}},
    }
})

export const {quizNtrMnt5El, quizNtrMnt5En, quizNtrMnt5Es} = NaturalMnt5Slice.actions
export default NaturalMnt5Slice.reducer