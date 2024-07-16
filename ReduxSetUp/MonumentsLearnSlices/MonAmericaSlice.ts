import {createSlice} from '@reduxjs/toolkit'
import AmericaMonEn from '../../data/worldMonuments/TopTabMonuments/AmericaEn'
import AmericaMonEl from '../../data/worldMonuments/TopTabMonuments/AmericaEl'
import AmericaMonEs from '../../data/worldMonuments/TopTabMonuments/AmericaEs'

const initialState = {
    MonAmItems: AmericaMonEn
}

const MonAmSlice = createSlice({
    name: 'MonumentsAm',
    initialState,
    reducers: {
        MonAmEn: ()=>{return {MonAmItems: AmericaMonEn}},
        MonAmEl: ()=>{return {MonAmItems: AmericaMonEl}},
        MonAmEs: ()=>{return {MonAmItems: AmericaMonEs}},
    }
})

export const {MonAmEn, MonAmEs, MonAmEl} = MonAmSlice.actions

export default MonAmSlice.reducer