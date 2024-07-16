import {createSlice} from '@reduxjs/toolkit'
import mapDataEl from '../../data/worldMonuments/Map/MapEl'
import mapDataEn from '../../data/worldMonuments/Map/MapEn'
import mapDataEs from '../../data/worldMonuments/Map/MapEs'

const initialState = {
    mapMonumentsItem: mapDataEn
}

const MonumentsMapSlice = createSlice({
    name: 'MonumentMapNames',
    initialState,
    reducers: {
        MnmEl: ()=>{return{mapMonumentsItem: mapDataEl}},
        MnmEn: ()=>{return{mapMonumentsItem: mapDataEn}},
        MnmEs: ()=>{return{mapMonumentsItem: mapDataEs}}
    }
}) 

export const {MnmEl, MnmEn, MnmEs} = MonumentsMapSlice.actions
export default MonumentsMapSlice.reducer