import {createSlice} from '@reduxjs/toolkit'
import FlagsAfricaEl from '../../data/flags/Africa/FlagsAfricaEl'
import FlagsAfricaEn from '../../data/flags/Africa/FlagsAfricaEn'
import FlagsAfricaEs from '../../data/flags/Africa/FlagsAfricaEs'

const initialState = {
    flagItemsAfrica: FlagsAfricaEn
}

const flagsAfricaSlice = createSlice({
    name: 'flagsAfrica',
    initialState,
    reducers: {
        flgAfEn: ()=>{return {flagItemsAfrica: FlagsAfricaEn}},
        flgAfEs: ()=>{return {flagItemsAfrica: FlagsAfricaEs}},
        flgAfEl: ()=>{return {flagItemsAfrica: FlagsAfricaEl}},
    }
})

export const {flgAfEl, flgAfEn, flgAfEs} = flagsAfricaSlice.actions

export default flagsAfricaSlice.reducer