import { createSlice } from "@reduxjs/toolkit";
import questions9En from "../../data/worldMonuments/Questions/questions9En";
import questions9El from "../../data/worldMonuments/Questions/questions9El";
import questions9Es from "../../data/worldMonuments/Questions/questions9Es";

const initialState = {
    quiz9ItemsMonuments: questions9En
}

const Monuments9Slice = createSlice({
    name: 'quiz9Monuments',
    initialState,
    reducers: {
        quizMnt9En: ()=>{return {quiz9ItemsMonuments: questions9En}},
        quizMnt9El: ()=>{return {quiz9ItemsMonuments: questions9El}},
        quizMnt9Es: ()=>{return {quiz9ItemsMonuments: questions9Es}}
    }
})

export const {quizMnt9En, quizMnt9El, quizMnt9Es} = Monuments9Slice.actions
export default Monuments9Slice.reducer