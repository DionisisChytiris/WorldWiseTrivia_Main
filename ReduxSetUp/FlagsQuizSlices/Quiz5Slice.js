import {createSlice} from '@reduxjs/toolkit'
import question5En from '../../data/flags/Questions/question5En'
import question5Es from '../../data/flags/Questions/question5Es'
import question5El from '../../data/flags/Questions/question5El'

const initialState = {
    quiz5ItemsFlags: question5En
}

const Quiz5Slice = createSlice({
    name: 'quiz5Flags',
    initialState,
    reducers: {
        quiz5En: ()=>{return {quiz5ItemsFlags: question5En}},
        quiz5Es: ()=>{return {quiz5ItemsFlags: question5Es}},
        quiz5El: ()=>{return {quiz5ItemsFlags: question5El}}
    }
})

export const {quiz5En, quiz5El, quiz5Es}  = Quiz5Slice.actions
export default Quiz5Slice.reducer