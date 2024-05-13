import {createSlice} from '@reduxjs/toolkit'
import FlagsDataEn from '../data/flags/LearnFlags/FlagsDataEn'
import FlagsDataEs from '../data/flags/LearnFlags/FlagsDataEs'
import FlagsDataEl from '../data/flags/LearnFlags/FlagsDataEl'

const initialState = {
    flagItems: FlagsDataEn
}

const flagSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        flagsEn: ()=>{return {flagItems: FlagsDataEn}},
        flagsEs: ()=>{return {flagItems: FlagsDataEs}},
        flagsEl: ()=>{return {flagItems: FlagsDataEl}}
    }
})

export const {flagsEn, flagsEs, flagsEl} = flagSlice.actions

export default flagSlice.reducer