import { createSlice } from "@reduxjs/toolkit";
import questions1En from "../../data/worldMonuments/Questions/questions1En";
import questions1El from "../../data/worldMonuments/Questions/questions1El";
import questions1Es from "../../data/worldMonuments/Questions/questions1Es";

const initialState = {
    quiz1ItemsMonuments: questions1En
}

const Monuments1Slice = createSlice({
    name: 'quiz1Monuments',
    initialState,
    reducers: {
        quizMnt1En: ()=>{return {quiz1ItemsMonuments: questions1En}},
        quizMnt1El: ()=>{return {quiz1ItemsMonuments: questions1El}},
        quizMnt1Es: ()=>{return {quiz1ItemsMonuments: questions1Es}}
    }
})

export const {quizMnt1En, quizMnt1El, quizMnt1Es} = Monuments1Slice.actions
export default Monuments1Slice.reducer