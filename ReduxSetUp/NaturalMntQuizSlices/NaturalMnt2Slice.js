import { createSlice } from "@reduxjs/toolkit";
import questions2El from '../../data/naturalMnts/Questions/questions2El'
import questions2En from '../../data/naturalMnts/Questions/questions2En'
import questions2Es from '../../data/naturalMnts/Questions/questions2Es'

const initialState = {
    quiz2ItemsNtrMnts: questions2El
}

const NaturalMnt2Slice = createSlice({
    name: 'quiz2NaturalMnts',
    initialState,
    reducers: {
        quizNtrMnt2En: ()=>{return {quiz2ItemsNtrMnts: questions2En}},
        quizNtrMnt2El: ()=>{return {quiz2ItemsNtrMnts: questions2El}},
        quizNtrMnt2Es: ()=>{return {quiz2ItemsNtrMnts: questions2Es}},
    }
})

export const {quizNtrMnt2El, quizNtrMnt2En, quizNtrMnt2Es} = NaturalMnt2Slice.actions
export default NaturalMnt2Slice.reducer