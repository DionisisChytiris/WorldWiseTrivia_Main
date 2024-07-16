import {createSlice} from '@reduxjs/toolkit'
import question1En from '../../data/flags/Questions/question1En'
import question1Es from '../../data/flags/Questions/question1Es'
import question1El from '../../data/flags/Questions/question1El'

const initialState = {
    quiz1ItemsFlags: question1En
}

const Quiz1Slice = createSlice({
    name: 'quiz1Flags',
    initialState,
    reducers: {
        quiz1En: ()=>{return {quiz1ItemsFlags: question1En}},
        quiz1Es: ()=>{return {quiz1ItemsFlags: question1Es}},
        quiz1El: ()=>{return {quiz1ItemsFlags: question1El}}
    }
})

export const {quiz1En, quiz1El, quiz1Es}  = Quiz1Slice.actions
export default Quiz1Slice.reducer