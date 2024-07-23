import {createSlice} from '@reduxjs/toolkit'
import AsiaMonEn from '../../data/worldMonuments/TopTabMonuments/AsiaEn'
import AsiaMonEl from '../../data/worldMonuments/TopTabMonuments/AsiaEl'
import AsiaMonEs from '../../data/worldMonuments/TopTabMonuments/AsiaEs'

const initialState = {
    MonAsItems: AsiaMonEn
}

const MonAsiaSlice = createSlice({
    name: 'MonumentsAsia',
    initialState,
    reducers: {
        MonAsEn: ()=>{return {MonAsItems: AsiaMonEn}},
        MonAsEl: ()=>{return {MonAsItems: AsiaMonEl}},
        MonAsEs: ()=>{return {MonAsItems: AsiaMonEs}},
    }
})

export const {MonAsEl, MonAsEn, MonAsEs} = MonAsiaSlice.actions

export default MonAsiaSlice.reducer