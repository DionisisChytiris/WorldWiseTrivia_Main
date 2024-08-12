import {createSlice} from '@reduxjs/toolkit'
import MapDataEn from '../../data/naturalMnts/Map/MapEn'
import MapDataEl from '../../data/naturalMnts/Map/MapEl'
import MapDataEs from '../../data/naturalMnts/Map/MapEs'

const initialState = {
    mapNaturalMntItem: MapDataEn
}

const NaturalMntMapSlice = createSlice({
    name: 'NaturalMntMapNames',
    initialState,
    reducers: {
        NtrMntEn: ()=>{return {mapNaturalMntItem: MapDataEn}},
        NtrMntEl: ()=>{return {mapNaturalMntItem: MapDataEl}},
        NtrMntEs: ()=>{return {mapNaturalMntItem: MapDataEs}},
    }
})

export const { NtrMntEl, NtrMntEn, NtrMntEs} = NaturalMntMapSlice.actions
export default NaturalMntMapSlice.reducer