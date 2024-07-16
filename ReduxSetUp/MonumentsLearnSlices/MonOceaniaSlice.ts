import {createSlice} from '@reduxjs/toolkit'
import OceaniaMonEn from '../../data/worldMonuments/TopTabMonuments/OceaniaMonEn'
import OceaniaMonEs from '../../data/worldMonuments/TopTabMonuments/OceaniaEs'
import OceaniaMonEl from '../../data/worldMonuments/TopTabMonuments/OceaniaEl.tsx'

const initialState = {
    MonOcnItems: OceaniaMonEn
}

const MonOcnSlice = createSlice({
    name: 'MonumentsOcn',
    initialState,
    reducers: {
        MonOcnEn: ()=>{return {MonOcnItems: OceaniaMonEn}},
        MonOcnEs: ()=>{return {MonOcnItems: OceaniaMonEs}},
        MonOcnEl: ()=>{return {MonOcnItems: OceaniaMonEl}}
    }
})

export const {MonOcnEn, MonOcnEs, MonOcnEl} = MonOcnSlice.actions

export default MonOcnSlice.reducer