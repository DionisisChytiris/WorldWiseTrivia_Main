import {createSlice} from '@reduxjs/toolkit'
import questions2En from '../../data/capitals/Questions/questions2En'
import questions2El from '../../data/capitals/Questions/questions2El'
import questions2Es from '../../data/capitals/Questions/questions2Es'

const initialState = {
    quiz2ItemsCapitals: questions2En
}

const Capitals2Slice = createSlice({
    name: 'quiz2Capitals',
    initialState,
    reducers: {
        quizCpt2En: ()=>{return {quiz2ItemsCapitals: questions2En}},
        quizCpt2El: ()=>{return {quiz2ItemsCapitals: questions2El}},
        quizCpt2Es: ()=>{return {quiz2ItemsCapitals: questions2Es}}
    }
})

export const {quizCpt2El, quizCpt2En, quizCpt2Es} = Capitals2Slice.actions
export default Capitals2Slice.reducer