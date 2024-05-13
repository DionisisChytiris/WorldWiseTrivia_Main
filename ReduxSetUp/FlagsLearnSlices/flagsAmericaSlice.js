import {createSlice} from '@reduxjs/toolkit'
import FlagsAmericaEl from '../../data/flags/America/FlagsAmericaEl'
import FlagsAmericaEn from '../../data/flags/America/FlagsAmericaEn'
import FlagsAmericaEs from '../../data/flags/America/FlagsAmericaEs'

const initialState = {
    flagItemsAmerica: FlagsAmericaEn
}

const flagsAmericaSlice = createSlice({
    name: 'flagsAmerica',
    initialState,
    reducers: {
        flgAmEn: ()=>{return {flagItemsAmerica: FlagsAmericaEn}},
        flgAmEs: ()=>{return {flagItemsAmerica: FlagsAmericaEs}},
        flgAmEl: ()=>{return {flagItemsAmerica: FlagsAmericaEl}},
    }
})

export const {flgAmEl, flgAmEn, flgAmEs} = flagsAmericaSlice.actions

export default flagsAmericaSlice.reducer