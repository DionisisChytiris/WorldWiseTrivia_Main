import { createSlice } from "@reduxjs/toolkit";
import AfrMntEl from "../../data/naturalMnts/TopTabMnts/AfrMntEl";
import AfrMntEs from "../../data/naturalMnts/TopTabMnts/AfrMntEs";
import AfrMntEn from "../../data/naturalMnts/TopTabMnts/AfrMntEn";

const initialState = {
    NtrAfrItems: AfrMntEn
}

const NaturalAfrSlice = createSlice({
    name: 'NaturalAfr',
    initialState,
    reducers: {
        NtrAfrEn: ()=>{return {NtrAfrItems:AfrMntEn}},
        NtrAfrEl: ()=>{return {NtrAfrItems:AfrMntEl}},
        NtrAfrEs: ()=>{return {NtrAfrItems:AfrMntEs}},
    }
})

export const {NtrAfrEl, NtrAfrEn, NtrAfrEs} = NaturalAfrSlice.actions
export default NaturalAfrSlice.reducer