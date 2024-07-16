import { createSlice } from "@reduxjs/toolkit";
import questions4En from "../../data/worldMonuments/Questions/questions4En";
import questions4El from "../../data/worldMonuments/Questions/questions4El";
import questions4Es from "../../data/worldMonuments/Questions/questions4Es";

const initialState = {
    quiz4ItemsMonuments: questions4En
}

const Monuments4Slice = createSlice({
    name: 'quiz4Monuments',
    initialState,
    reducers: {
        quizMnt4En: ()=>{return {quiz4ItemsMonuments: questions4En}},
        quizMnt4El: ()=>{return {quiz4ItemsMonuments: questions4El}},
        quizMnt4Es: ()=>{return {quiz4ItemsMonuments: questions4Es}}
    }
})

export const {quizMnt4En, quizMnt4El, quizMnt4Es} = Monuments4Slice.actions
export default Monuments4Slice.reducer