import {createSlice} from '@reduxjs/toolkit'
import question10En from '../../data/flags/Questions/question10En'
import question10Es from '../../data/flags/Questions/question10Es'
import question10El from '../../data/flags/Questions/question10El'

const initialState = {
    quiz10ItemsFlags: question10En
}

const Quiz10Slice = createSlice({
    name: 'quiz10Flags',
    initialState,
    reducers: {
        quiz10En: ()=>{return {quiz10ItemsFlags: question10En}},
        quiz10Es: ()=>{return {quiz10ItemsFlags: question10Es}},
        quiz10El: ()=>{return {quiz10ItemsFlags: question10El}}
    }
})

export const {quiz10En, quiz10El, quiz10Es}  = Quiz10Slice.actions
export default Quiz10Slice.reducer