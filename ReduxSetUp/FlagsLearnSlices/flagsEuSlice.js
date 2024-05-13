import {createSlice} from '@reduxjs/toolkit'
import FlagsEuropeEn from '../../data/flags/Europe/FlagsEuropeEn'
import FlagsEuropeEs from '../../data/flags/Europe/FlagsEuropeEs'
import FlagsEuropeEl from '../../data/flags/Europe/FlagsEuropeEl'

const initialState = {
    flagItemsEu: FlagsEuropeEn
}

const flagsEuSlice = createSlice({
    name: 'flagsEu',
    initialState,
    reducers: {
        flagsEuEn: ()=> {return {flagItemsEu: FlagsEuropeEn}},
        flagsEuEs: ()=> {return {flagItemsEu: FlagsEuropeEs}},
        flagsEuEl: ()=> {return {flagItemsEu: FlagsEuropeEl}}
    }
})

export const {flagsEuEn, flagsEuEs, flagsEuEl} = flagsEuSlice.actions

export default flagsEuSlice.reducer