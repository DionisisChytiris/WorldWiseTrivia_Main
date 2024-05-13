import {createSlice} from '@reduxjs/toolkit'
import questions3En from '../../data/capitals/Questions/questions3En'
import questions3El from '../../data/capitals/Questions/questions3El'
import questions3Es from '../../data/capitals/Questions/questions3Es'

const initialState = {
    quiz3ItemsCapitals: questions3En
}

const Capitals3Slice = createSlice({
    name: 'quiz3Capitals',
    initialState,
    reducers: {
        quizCpt3En: ()=>{return {quiz3ItemsCapitals: questions3En}},
        quizCpt3El: ()=>{return {quiz3ItemsCapitals: questions3El}},
        quizCpt3Es: ()=>{return {quiz3ItemsCapitals: questions3Es}}
    }
})

export const {quizCpt3El, quizCpt3En, quizCpt3Es} = Capitals3Slice.actions
export default Capitals3Slice.reducer