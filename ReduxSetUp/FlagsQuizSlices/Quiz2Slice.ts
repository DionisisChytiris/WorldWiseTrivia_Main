import {createSlice} from '@reduxjs/toolkit'
import question2En from '../../data/flags/Questions/question2En'
import question2Es from '../../data/flags/Questions/question2Es'
import question2El from '../../data/flags/Questions/question2El'

const initialState = {
    quiz2ItemsFlags: question2En
}

const Quiz2Slice = createSlice({
    name: 'quiz2Flags',
    initialState,
    reducers: {
        quiz2En: ()=>{return {quiz2ItemsFlags: question2En}},
        quiz2Es: ()=>{return {quiz2ItemsFlags: question2Es}},
        quiz2El: ()=>{return {quiz2ItemsFlags: question2El}}
    }
})

export const {quiz2En, quiz2El, quiz2Es}  = Quiz2Slice.actions
export default Quiz2Slice.reducer