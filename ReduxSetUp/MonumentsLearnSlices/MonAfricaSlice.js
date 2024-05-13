import {createSlice} from '@reduxjs/toolkit'
import AfricaMonEn from '../../data/worldMonuments/TopTabMonuments/AfricaEn'
import AfricaMonEl from '../../data/worldMonuments/TopTabMonuments/AfricaEl'
import AfricaMonEs from '../../data/worldMonuments/TopTabMonuments/AfricaEs'

const initialState = {
    MonAfItems: AfricaMonEn
}

const MonAfSlice = createSlice({
    name: 'MonumentsAf',
    initialState,
    reducers: {
        MonAfEn: ()=>{return {MonAfItems: AfricaMonEn}},
        MonAfEl: ()=>{return {MonAfItems: AfricaMonEl}},
        MonAfEs: ()=>{return {MonAfItems: AfricaMonEs}},
    }
})

export const {MonAfEn, MonAfEs, MonAfEl} = MonAfSlice.actions

export default MonAfSlice.reducer