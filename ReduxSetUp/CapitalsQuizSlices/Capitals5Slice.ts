import {createSlice} from '@reduxjs/toolkit'
import questions5En from '../../data/capitals/Questions/questions5En'
import questions5El from '../../data/capitals/Questions/questions5El'
import questions5Es from '../../data/capitals/Questions/questions5Es'

const initialState = {
    quiz5ItemsCapitals: questions5En
}

const Capitals5Slice = createSlice({
    name: 'quiz5Capitals',
    initialState,
    reducers: {
        quizCpt5En: ()=>{return {quiz5ItemsCapitals: questions5En}},
        quizCpt5El: ()=>{return {quiz5ItemsCapitals: questions5El}},
        quizCpt5Es: ()=>{return {quiz5ItemsCapitals: questions5Es}}
    }
})

export const {quizCpt5El, quizCpt5En, quizCpt5Es} = Capitals5Slice.actions
export default Capitals5Slice.reducer