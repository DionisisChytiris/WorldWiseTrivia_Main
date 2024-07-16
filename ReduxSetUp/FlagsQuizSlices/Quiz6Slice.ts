import {createSlice} from '@reduxjs/toolkit'
import question6En from '../../data/flags/Questions/question6En'
import question6Es from '../../data/flags/Questions/question6Es'
import question6El from '../../data/flags/Questions/question6El'

const initialState = {
    quiz6ItemsFlags: question6En
}

const Quiz6Slice = createSlice({
    name: 'quiz6Flags',
    initialState,
    reducers: {
        quiz6En: ()=>{return {quiz6ItemsFlags: question6En}},
        quiz6Es: ()=>{return {quiz6ItemsFlags: question6Es}},
        quiz6El: ()=>{return {quiz6ItemsFlags: question6El}}
    }
})

export const {quiz6En, quiz6El, quiz6Es}  = Quiz6Slice.actions
export default Quiz6Slice.reducer