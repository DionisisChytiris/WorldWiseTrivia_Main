import {createSlice} from '@reduxjs/toolkit'
import questions4En from '../../data/capitals/Questions/questions4En'
import questions4El from '../../data/capitals/Questions/questions4El'
import questions4Es from '../../data/capitals/Questions/questions4Es'

const initialState = {
    quiz4ItemsCapitals: questions4En
}

const Capitals4Slice = createSlice({
    name: 'quiz4Capitals',
    initialState,
    reducers: {
        quizCpt4En: ()=>{return {quiz4ItemsCapitals: questions4En}},
        quizCpt4El: ()=>{return {quiz4ItemsCapitals: questions4El}},
        quizCpt4Es: ()=>{return {quiz4ItemsCapitals: questions4Es}}
    }
})

export const {quizCpt4El, quizCpt4En, quizCpt4Es} = Capitals4Slice.actions
export default Capitals4Slice.reducer