import { createSlice } from "@reduxjs/toolkit";
import AmerMntEl from "../../data/naturalMnts/TopTabMnts/AmerMntEl";
import AmerMntEn from "../../data/naturalMnts/TopTabMnts/AmerMntEn";
import AmerMntEs from "../../data/naturalMnts/TopTabMnts/AmerMntEs";


const initialState = {
    NtrAmerItems: AmerMntEn
}

const NaturalAmerSlice = createSlice({
    name: 'NaturalAmer',
    initialState,
    reducers: {
        NtrAmerEn: ()=>{return {NtrAmerItems:AmerMntEn}},
        NtrAmerEl: ()=>{return {NtrAmerItems:AmerMntEl}},
        NtrAmerEs: ()=>{return {NtrAmerItems:AmerMntEs}},
    }
})

export const {NtrAmerEl, NtrAmerEn, NtrAmerEs} = NaturalAmerSlice.actions
export default NaturalAmerSlice.reducer