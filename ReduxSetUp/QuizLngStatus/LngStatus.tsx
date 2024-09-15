import {createSlice} from '@reduxjs/toolkit'

type Status ={
    initLng: string
}

const initialState: Status = {
    initLng: 'En'
}

const LngStatusSlice = createSlice({
    name: 'lngStatus',
    initialState,
    reducers: {
        statusEn: ()=>{return {initLng: 'En'}},
        statusEs: ()=>{return {initLng: 'Es'}},
        statusEl: ()=>{return {initLng: 'El'}},
    }
})

export const {statusEn, statusEs, statusEl} = LngStatusSlice.actions
export default LngStatusSlice.reducer