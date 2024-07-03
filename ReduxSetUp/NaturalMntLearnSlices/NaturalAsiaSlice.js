import { createSlice } from "@reduxjs/toolkit";
import AsiaMntEl from "../../data/naturalMnts/TopTabMnts/AsiaMntEl";
import AsiaMntEn from "../../data/naturalMnts/TopTabMnts/AsiaMntEn";
import AsiaMntEs from "../../data/naturalMnts/TopTabMnts/AsiaMntEs";

const initialState = {
    NtrAsiaItems: AsiaMntEn
}

const NaturalAsiaSlice = createSlice({
    name: 'NaturalAsia',
    initialState,
    reducers: {
        NtrAsiaEn: ()=>{return {NtrAsiaItems:AsiaMntEn}},
        NtrAsiaEl: ()=>{return {NtrAsiaItems:AsiaMntEl}},
        NtrAsiaEs: ()=>{return {NtrAsiaItems:AsiaMntEs}},
    }
})

export const {NtrAsiaEl, NtrAsiaEn, NtrAsiaEs} = NaturalAsiaSlice.actions
export default NaturalAsiaSlice.reducer