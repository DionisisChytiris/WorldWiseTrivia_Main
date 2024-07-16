import { createSlice } from "@reduxjs/toolkit";
import OceaMntEl from "../../data/naturalMnts/TopTabMnts/OceaMntEl";
import OceaMntEs from "../../data/naturalMnts/TopTabMnts/OceaMntEs";
import OceaMntEn from "../../data/naturalMnts/TopTabMnts/OceaMntEn";

const initialState = {
    NtrOceaItems: OceaMntEn
}

const NaturalOceaSlice = createSlice({
    name: 'NaturalOcea',
    initialState,
    reducers: {
        NtrOceaEn: ()=>{return {NtrOceaItems:OceaMntEn}},
        NtrOceaEl: ()=>{return {NtrOceaItems:OceaMntEl}},
        NtrOceaEs: ()=>{return {NtrOceaItems:OceaMntEs}},
    }
})

export const {NtrOceaEl, NtrOceaEn, NtrOceaEs} = NaturalOceaSlice.actions
export default NaturalOceaSlice.reducer