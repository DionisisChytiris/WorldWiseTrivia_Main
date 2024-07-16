import {createSlice} from '@reduxjs/toolkit'
import questions7En from '../../data/capitals/Questions/questions7En'
import questions7El from '../../data/capitals/Questions/questions7El'
import questions7Es from '../../data/capitals/Questions/questions7Es'

const initialState = {
    quiz7ItemsCapitals: questions7En
}

const Capitals7Slice = createSlice({
    name: 'quiz7Capitals',
    initialState,
    reducers: {
        quizCpt7En: ()=>{return {quiz7ItemsCapitals: questions7En}},
        quizCpt7El: ()=>{return {quiz7ItemsCapitals: questions7El}},
        quizCpt7Es: ()=>{return {quiz7ItemsCapitals: questions7Es}}
    }
})

export const {quizCpt7El, quizCpt7En, quizCpt7Es} = Capitals7Slice.actions
export default Capitals7Slice.reducer