import {createSlice} from '@reduxjs/toolkit'
import questions8En from '../../data/capitals/Questions/questions8En'
import questions8El from '../../data/capitals/Questions/questions8El'
import questions8Es from '../../data/capitals/Questions/questions8Es'

const initialState = {
    quiz8ItemsCapitals: questions8En
}

const Capitals8Slice = createSlice({
    name: 'quiz8Capitals',
    initialState,
    reducers: {
        quizCpt8En: ()=>{return {quiz8ItemsCapitals: questions8En}},
        quizCpt8El: ()=>{return {quiz8ItemsCapitals: questions8El}},
        quizCpt8Es: ()=>{return {quiz8ItemsCapitals: questions8Es}}
    }
})

export const {quizCpt8El, quizCpt8En, quizCpt8Es} = Capitals8Slice.actions
export default Capitals8Slice.reducer