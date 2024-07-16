import {createSlice} from '@reduxjs/toolkit'
import FlagsOceaniaEn from '../../data/flags/Oceania/FlagsOceaniaEn'
import FlagsOceaniaEs from '../../data/flags/Oceania/FlagsOceaniaEs'
import FlagsOceaniaEl from '../../data/flags/Oceania/FlagsOceaniaEl'

const initialState = {
    flagItemsOceania: FlagsOceaniaEn
}

const flagsOceaniaSlice = createSlice({
    name: 'flagsOceania',
    initialState,
    reducers: {
        flgOcEn: ()=>{return{flagItemsOceania: FlagsOceaniaEn}},
        flgOcEs: ()=>{return{flagItemsOceania: FlagsOceaniaEs}},
        flgOcEl: ()=>{return{flagItemsOceania: FlagsOceaniaEl}},
    }
})

export const {flgOcEl, flgOcEn, flgOcEs} = flagsOceaniaSlice.actions

export default flagsOceaniaSlice.reducer