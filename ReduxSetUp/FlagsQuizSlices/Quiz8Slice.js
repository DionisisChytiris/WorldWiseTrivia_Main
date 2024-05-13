import {createSlice} from '@reduxjs/toolkit'
import question8En from '../../data/flags/Questions/question8En'
import question8Es from '../../data/flags/Questions/question8Es'
import question8El from '../../data/flags/Questions/question8El'

const initialState = {
    quiz8ItemsFlags: question8En
}

const Quiz8Slice = createSlice({
    name: 'quiz8Flags',
    initialState,
    reducers: {
        quiz8En: ()=>{return {quiz8ItemsFlags: question8En}},
        quiz8Es: ()=>{return {quiz8ItemsFlags: question8Es}},
        quiz8El: ()=>{return {quiz8ItemsFlags: question8El}}
    }
})

export const {quiz8En, quiz8El, quiz8Es}  = Quiz8Slice.actions
export default Quiz8Slice.reducer