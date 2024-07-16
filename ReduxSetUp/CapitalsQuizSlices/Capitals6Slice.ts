import {createSlice} from '@reduxjs/toolkit'
import questions6En from '../../data/capitals/Questions/questions6En'
import questions6El from '../../data/capitals/Questions/questions6El'
import questions6Es from '../../data/capitals/Questions/questions6Es'

const initialState = {
    quiz6ItemsCapitals: questions6En
}

const Capitals6Slice = createSlice({
    name: 'quiz6Capitals',
    initialState,
    reducers: {
        quizCpt6En: ()=>{return {quiz6ItemsCapitals: questions6En}},
        quizCpt6El: ()=>{return {quiz6ItemsCapitals: questions6El}},
        quizCpt6Es: ()=>{return {quiz6ItemsCapitals: questions6Es}}
    }
})

export const {quizCpt6El, quizCpt6En, quizCpt6Es} = Capitals6Slice.actions
export default Capitals6Slice.reducer