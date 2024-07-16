import {createSlice} from '@reduxjs/toolkit'
import mapDataEl from '../../data/capitals/Map/MapEl'
import mapDataEn from '../../data/capitals/Map/MapEn'
import mapDataEs from '../../data/capitals/Map/MapEs'

const initialState = {
    mapCapitalsItem: mapDataEn
}

const CapitalsMapsSlice = createSlice({
    name: 'CapitalsMapNames',
    initialState,
    reducers: {
        CptNameEl: ()=>{return{mapCapitalsItem: mapDataEl}},
        CptNameEn: ()=>{return{mapCapitalsItem: mapDataEn}},
        CptNameEs: ()=>{return{mapCapitalsItem: mapDataEs}}
    }
})

export const {CptNameEl, CptNameEn, CptNameEs} = CapitalsMapsSlice.actions
export default CapitalsMapsSlice.reducer