import { createSlice } from "@reduxjs/toolkit";
import questions2En from "../../data/worldMonuments/Questions/questions2En";
import questions2El from "../../data/worldMonuments/Questions/questions2El";
import questions2Es from "../../data/worldMonuments/Questions/questions2Es";

const initialState = {
    quiz2ItemsMonuments: questions2En
}

const Monuments2Slice = createSlice({
    name: 'quiz2Monuments',
    initialState,
    reducers: {
        quizMnt2En: ()=>{return {quiz2ItemsMonuments: questions2En}},
        quizMnt2El: ()=>{return {quiz2ItemsMonuments: questions2El}},
        quizMnt2Es: ()=>{return {quiz2ItemsMonuments: questions2Es}}
    }
})

export const {quizMnt2En, quizMnt2El, quizMnt2Es} = Monuments2Slice.actions
export default Monuments2Slice.reducer