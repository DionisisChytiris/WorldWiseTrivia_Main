import {createSlice} from '@reduxjs/toolkit'
import question7En from '../../data/flags/Questions/question7En'
import question7Es from '../../data/flags/Questions/question7Es'
import question7El from '../../data/flags/Questions/question7El'

const initialState = {
    quiz7ItemsFlags: question7En
}

const Quiz7Slice = createSlice({
    name: 'quiz7Flags',
    initialState,
    reducers: {
        quiz7En: ()=>{return {quiz7ItemsFlags: question7En}},
        quiz7Es: ()=>{return {quiz7ItemsFlags: question7Es}},
        quiz7El: ()=>{return {quiz7ItemsFlags: question7El}}
    }
})

export const {quiz7En, quiz7El, quiz7Es}  = Quiz7Slice.actions
export default Quiz7Slice.reducer