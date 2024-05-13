import {createSlice} from '@reduxjs/toolkit'
import questions9En from '../../data/capitals/Questions/questions9En'
import questions9El from '../../data/capitals/Questions/questions9El'
import questions9Es from '../../data/capitals/Questions/questions9Es'

const initialState = {
    quiz9ItemsCapitals: questions9En
}

const Capitals9Slice = createSlice({
    name: 'quiz9Capitals',
    initialState,
    reducers: {
        quizCpt9En: ()=>{return {quiz9ItemsCapitals: questions9En}},
        quizCpt9El: ()=>{return {quiz9ItemsCapitals: questions9El}},
        quizCpt9Es: ()=>{return {quiz9ItemsCapitals: questions9Es}}
    }
})

export const {quizCpt9El, quizCpt9En, quizCpt9Es} = Capitals9Slice.actions
export default Capitals9Slice.reducer