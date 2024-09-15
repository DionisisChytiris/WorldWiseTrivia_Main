import { createSlice } from "@reduxjs/toolkit";
import i18next, {languageResources} from '../../MultiLanguage/i18next'

const initialState = {
    lngTri18next: i18next.changeLanguage(Object.keys(languageResources)[0])
}

const LanguageSlice = createSlice({
    name: 'lngTri18NextName',
    initialState,
    reducers: {
        lngTrEn: ()=>i18next.changeLanguage(Object.keys(languageResources)[0]),
        lngTrEs: ()=>i18next.changeLanguage(Object.keys(languageResources)[1]),
        lngTrEl: ()=>i18next.changeLanguage(Object.keys(languageResources)[2]),
    }
})

export const {lngTrEn, lngTrEs, lngTrEl} = LanguageSlice.actions
export default LanguageSlice.reducer
