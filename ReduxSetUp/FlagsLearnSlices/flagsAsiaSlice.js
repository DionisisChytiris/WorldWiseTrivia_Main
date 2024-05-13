import {createSlice} from '@reduxjs/toolkit'
import FlagsAsiaEn from '../../data/flags/Asia/FlagsAsiaEn'
import FlagsAsiaEs from '../../data/flags/Asia/FlagsAsiaEs'
import FlagsAsiaEl from '../../data/flags/Asia/FlagsAsiaEl'

const initialState = {
    flagItemAsia: FlagsAsiaEn
}

const flagsAsiaSlice = createSlice({
    name: 'flagsAsia',
    initialState,
    reducers: {
        flgAsEn: ()=>{return{flagItemAsia: FlagsAsiaEn}},
        flgAsEs: ()=>{return{flagItemAsia: FlagsAsiaEs}},
        flgAsEl: ()=>{return{flagItemAsia: FlagsAsiaEl}},
    }
})

export const {flgAsEn, flgAsEl, flgAsEs} = flagsAsiaSlice.actions

export default flagsAsiaSlice.reducer