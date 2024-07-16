import { createSlice } from "@reduxjs/toolkit";
import questions6En from "../../data/worldMonuments/Questions/questions6En";
import questions6El from "../../data/worldMonuments/Questions/questions6El";
import questions6Es from "../../data/worldMonuments/Questions/questions6Es";

const initialState = {
    quiz6ItemsMonuments: questions6En
}

const Monuments6Slice = createSlice({
    name: 'quiz6Monuments',
    initialState,
    reducers: {
        quizMnt6En: ()=>{return {quiz6ItemsMonuments: questions6En}},
        quizMnt6El: ()=>{return {quiz6ItemsMonuments: questions6El}},
        quizMnt6Es: ()=>{return {quiz6ItemsMonuments: questions6Es}}
    }
})

export const {quizMnt6En, quizMnt6El, quizMnt6Es} = Monuments6Slice.actions
export default Monuments6Slice.reducer