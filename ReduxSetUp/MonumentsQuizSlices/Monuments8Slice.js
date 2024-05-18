import { createSlice } from "@reduxjs/toolkit";
import questions8En from "../../data/worldMonuments/Questions/questions8En";
import questions8El from "../../data/worldMonuments/Questions/questions8El";
import questions8Es from "../../data/worldMonuments/Questions/questions8Es";

const initialState = {
    quiz8ItemsMonuments: questions8En
}

const Monuments8Slice = createSlice({
    name: 'quiz8Monuments',
    initialState,
    reducers: {
        quizMnt8En: ()=>{return {quiz8ItemsMonuments: questions8En}},
        quizMnt8El: ()=>{return {quiz8ItemsMonuments: questions8El}},
        quizMnt8Es: ()=>{return {quiz8ItemsMonuments: questions8Es}}
    }
})

export const {quizMnt8En, quizMnt8El, quizMnt8Es} = Monuments8Slice.actions
export default Monuments8Slice.reducer