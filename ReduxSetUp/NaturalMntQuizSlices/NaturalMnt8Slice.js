import { createSlice } from "@reduxjs/toolkit";
import questions8El from '../../data/naturalMnts/Questions/questions8El'
import questions8En from '../../data/naturalMnts/Questions/questions8En'
import questions8Es from '../../data/naturalMnts/Questions/questions8Es'

const initialState = {
    quiz8ItemsNtrMnts: questions8El
}

const NaturalMnt8Slice = createSlice({
    name: 'quiz8NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt8En: ()=>{return {quiz8ItemsNtrMnts: questions8En}},
        quizNtrMnt8El: ()=>{return {quiz8ItemsNtrMnts: questions8El}},
        quizNtrMnt8Es: ()=>{return {quiz8ItemsNtrMnts: questions8Es}},
    }
})

export const {quizNtrMnt8El, quizNtrMnt8En, quizNtrMnt8Es} = NaturalMnt8Slice.actions
export default NaturalMnt8Slice.reducer