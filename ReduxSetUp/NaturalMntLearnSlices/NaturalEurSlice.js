import { createSlice } from "@reduxjs/toolkit";
import EurMntEl from "../../data/naturalMnts/TopTabMnts/EurMntEl";
import EurMntEn from "../../data/naturalMnts/TopTabMnts/EurMntEn";
import EurMntEs from "../../data/naturalMnts/TopTabMnts/EurMntEs";

const initialState = {
    NtrEurItems: EurMntEn
}

const NaturalEurSlice = createSlice({
    name: 'NaturalEur',
    initialState,
    reducers: {
        NtrEurEn: ()=>{return {NtrEurItems:EurMntEn}},
        NtrEurEl: ()=>{return {NtrEurItems:EurMntEl}},
        NtrEurEs: ()=>{return {NtrEurItems:EurMntEs}},
    }
})

export const {NtrEurEl, NtrEurEn, NtrEurEs} = NaturalEurSlice.actions
export default NaturalEurSlice.reducer