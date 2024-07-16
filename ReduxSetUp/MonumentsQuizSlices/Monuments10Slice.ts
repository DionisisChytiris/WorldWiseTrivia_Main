import { createSlice } from "@reduxjs/toolkit";
import questions10En from "../../data/worldMonuments/Questions/questions10En";
import questions10El from "../../data/worldMonuments/Questions/questions10El";
import questions10Es from "../../data/worldMonuments/Questions/questions10Es";

const initialState = {
    quiz10ItemsMonuments: questions10En
}

const Monuments10Slice = createSlice({
    name: 'quiz10Monuments',
    initialState,
    reducers: {
        quizMnt10En: ()=>{return {quiz10ItemsMonuments: questions10En}},
        quizMnt10El: ()=>{return {quiz10ItemsMonuments: questions10El}},
        quizMnt10Es: ()=>{return {quiz10ItemsMonuments: questions10Es}}
    }
})

export const {quizMnt10En, quizMnt10El, quizMnt10Es} = Monuments10Slice.actions
export default Monuments10Slice.reducer