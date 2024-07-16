import { createSlice } from "@reduxjs/toolkit";
import questions3En from "../../data/worldMonuments/Questions/questions3En";
import questions3El from "../../data/worldMonuments/Questions/questions3El";
import questions3Es from "../../data/worldMonuments/Questions/questions3Es";

const initialState = {
    quiz3ItemsMonuments: questions3En
}

const Monuments3Slice = createSlice({
    name: 'quiz3Monuments',
    initialState,
    reducers: {
        quizMnt3En: ()=>{return {quiz3ItemsMonuments: questions3En}},
        quizMnt3El: ()=>{return {quiz3ItemsMonuments: questions3El}},
        quizMnt3Es: ()=>{return {quiz3ItemsMonuments: questions3Es}}
    }
})

export const {quizMnt3En, quizMnt3El, quizMnt3Es} = Monuments3Slice.actions
export default Monuments3Slice.reducer