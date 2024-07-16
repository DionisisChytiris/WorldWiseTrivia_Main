import {createSlice} from '@reduxjs/toolkit'
import question9En from '../../data/flags/Questions/question9En'
import question9Es from '../../data/flags/Questions/question9Es'
import question9El from '../../data/flags/Questions/question9El'

const initialState = {
    quiz9ItemsFlags: question9En
}

const Quiz9Slice = createSlice({
    name: 'quiz9Flags',
    initialState,
    reducers: {
        quiz9En: ()=>{return {quiz9ItemsFlags: question9En}},
        quiz9Es: ()=>{return {quiz9ItemsFlags: question9Es}},
        quiz9El: ()=>{return {quiz9ItemsFlags: question9El}}
    }
})

export const {quiz9En, quiz9El, quiz9Es}  = Quiz9Slice.actions
export default Quiz9Slice.reducer