import {createSlice} from '@reduxjs/toolkit'
import questions1En from '../../data/capitals/Questions/questions1En'
import questions1El from '../../data/capitals/Questions/questions1El'
import questions1Es from '../../data/capitals/Questions/questions1Es'

const initialState = {
    quiz1ItemsCapitals: questions1En
}

const Capitals1Slice = createSlice({
    name: 'quiz1Capitals',
    initialState,
    reducers: {
        quizCpt1En: ()=>{return {quiz1ItemsCapitals: questions1En}},
        quizCpt1El: ()=>{return {quiz1ItemsCapitals: questions1El}},
        quizCpt1Es: ()=>{return {quiz1ItemsCapitals: questions1Es}}
    }
})

export const {quizCpt1El, quizCpt1En, quizCpt1Es} = Capitals1Slice.actions
export default Capitals1Slice.reducer