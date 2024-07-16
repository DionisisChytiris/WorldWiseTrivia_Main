import {createSlice} from '@reduxjs/toolkit'
import EuropeMonEn from '../../data/worldMonuments/TopTabMonuments/EuropeEn'
import EuropeMonEs from '../../data/worldMonuments/TopTabMonuments/EuropeEs'
import EuropeMonEl from '../../data/worldMonuments/TopTabMonuments/EuropeEl'

const initialState = {
    MonEuItems: EuropeMonEn
}

const MonEuSlice = createSlice({
    name: 'MonumentsEu',
    initialState,
    reducers: {
        MonEuEn: ()=>{return {MonEuItems: EuropeMonEn}},
        MonEuEs: ()=>{return {MonEuItems: EuropeMonEs}},
        MonEuEl: ()=>{return {MonEuItems: EuropeMonEl}}
    }
})

export const {MonEuEn, MonEuEs, MonEuEl} = MonEuSlice.actions

export default MonEuSlice.reducer