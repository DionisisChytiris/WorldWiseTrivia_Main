import {createSlice} from '@reduxjs/toolkit'
import questions10En from '../../data/capitals/Questions/questions10En'
import questions10El from '../../data/capitals/Questions/questions10El'
import questions10Es from '../../data/capitals/Questions/questions10Es'

const initialState = {
    quiz10ItemsCapitals: questions10En
}

const Capitals10Slice = createSlice({
    name: 'quiz10Capitals',
    initialState,
    reducers: {
        quizCpt10En: ()=>{return {quiz10ItemsCapitals: questions10En}},
        quizCpt10El: ()=>{return {quiz10ItemsCapitals: questions10El}},
        quizCpt10Es: ()=>{return {quiz10ItemsCapitals: questions10Es}}
    }
})

export const {quizCpt10El, quizCpt10En, quizCpt10Es} = Capitals10Slice.actions
export default Capitals10Slice.reducer