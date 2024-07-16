import {createSlice} from '@reduxjs/toolkit'
import question4En from '../../data/flags/Questions/question4En'
import question4Es from '../../data/flags/Questions/question4Es'
import question4El from '../../data/flags/Questions/question4El'


const initialState = {
    quiz4ItemsFlags: question4En
}

const Quiz4Slice = createSlice({
    name: 'quiz4Flags',
    initialState,
    reducers: {
        quiz4En: ()=>{return {quiz4ItemsFlags: question4En}},
        quiz4Es: ()=>{return {quiz4ItemsFlags: question4Es}},
        quiz4El: ()=>{return {quiz4ItemsFlags: question4El}}
    }
})

export const {quiz4En, quiz4El, quiz4Es}  = Quiz4Slice.actions
export default Quiz4Slice.reducer