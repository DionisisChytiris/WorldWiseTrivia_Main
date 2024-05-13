import {createSlice} from '@reduxjs/toolkit'

type Status ={
    initStatus: string
}

const initialState: Status = {
    initStatus: 'Flags'
}

const QuizStatusSlice = createSlice({
    name: 'quizStatus',
    initialState,
    reducers: {
        statusFlags: ()=>{return {initStatus: 'Flags'}},
        statusGuess: ()=>{return {initStatus: 'Guess'}},
        statusCapitals: ()=>{return {initStatus: 'Capitals'}},
        // status1: ()=>{return {flagItemsAfrica: FlagsAfricaEn}},
        // status2: ()=>{return {flagItemsAfrica: FlagsAfricaEs}},
        // status3: ()=>{return {flagItemsAfrica: FlagsAfricaEl}},
    }
})

export const {statusCapitals, statusFlags, statusGuess} = QuizStatusSlice.actions

export default QuizStatusSlice.reducer