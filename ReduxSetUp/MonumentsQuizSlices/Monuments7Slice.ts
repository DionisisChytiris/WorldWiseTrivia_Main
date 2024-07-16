import { createSlice } from "@reduxjs/toolkit";
import questions7En from "../../data/worldMonuments/Questions/questions7En";
import questions7El from "../../data/worldMonuments/Questions/questions7El";
import questions7Es from "../../data/worldMonuments/Questions/questions7Es";

const initialState = {
    quiz7ItemsMonuments: questions7En
}

const Monuments7Slice = createSlice({
    name: 'quiz7Monuments',
    initialState,
    reducers: {
        quizMnt7En: ()=>{return {quiz7ItemsMonuments: questions7En}},
        quizMnt7El: ()=>{return {quiz7ItemsMonuments: questions7El}},
        quizMnt7Es: ()=>{return {quiz7ItemsMonuments: questions7Es}}
    }
})

export const {quizMnt7En, quizMnt7El, quizMnt7Es} = Monuments7Slice.actions
export default Monuments7Slice.reducer