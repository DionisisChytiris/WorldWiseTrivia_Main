import { createSlice } from "@reduxjs/toolkit";
import questions5En from "../../data/worldMonuments/Questions/questions5En";
import questions5El from "../../data/worldMonuments/Questions/questions5El";
import questions5Es from "../../data/worldMonuments/Questions/questions5Es";

const initialState = {
    quiz5ItemsMonuments: questions5En
}

const Monuments5Slice = createSlice({
    name: 'quiz5Monuments',
    initialState,
    reducers: {
        quizMnt5En: ()=>{return {quiz5ItemsMonuments: questions5En}},
        quizMnt5El: ()=>{return {quiz5ItemsMonuments: questions5El}},
        quizMnt5Es: ()=>{return {quiz5ItemsMonuments: questions5Es}}
    }
})

export const {quizMnt5En, quizMnt5El, quizMnt5Es} = Monuments5Slice.actions
export default Monuments5Slice.reducer