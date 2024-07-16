import {createSlice} from '@reduxjs/toolkit'
import question3En from '../../data/flags/Questions/question3En'
import question3Es from '../../data/flags/Questions/question3Es'
import question3El from '../../data/flags/Questions/question3El'


const initialState = {
    quiz3ItemsFlags: question3En
}

const Quiz3Slice = createSlice({
    name: 'quiz3Flags',
    initialState,
    reducers: {
        quiz3En: ()=>{return {quiz3ItemsFlags: question3En}},
        quiz3Es: ()=>{return {quiz3ItemsFlags: question3Es}},
        quiz3El: ()=>{return {quiz3ItemsFlags: question3El}}
    }
})

export const {quiz3En, quiz3El, quiz3Es}  = Quiz3Slice.actions
export default Quiz3Slice.reducer