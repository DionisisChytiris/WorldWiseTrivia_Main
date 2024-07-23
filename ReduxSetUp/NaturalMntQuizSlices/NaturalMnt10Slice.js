import { createSlice } from "@reduxjs/toolkit";
import questions10El from '../../data/naturalMnts/Questions/questions10El'
import questions10En from '../../data/naturalMnts/Questions/questions10En'
import questions10Es from '../../data/naturalMnts/Questions/questions10Es'

const initialState = {
    quiz10ItemsNtrMnts: questions10El
}

const NaturalMnt10Slice = createSlice({
    name: 'quiz10NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt10En: ()=>{return {quiz10ItemsNtrMnts: questions10En}},
        quizNtrMnt10El: ()=>{return {quiz10ItemsNtrMnts: questions10El}},
        quizNtrMnt10Es: ()=>{return {quiz10ItemsNtrMnts: questions10Es}},
    }
})

export const {quizNtrMnt10El, quizNtrMnt10En, quizNtrMnt10Es} = NaturalMnt10Slice.actions
export default NaturalMnt10Slice.reducer