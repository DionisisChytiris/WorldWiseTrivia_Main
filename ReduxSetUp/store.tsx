import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import flagSlice from './flagSlice'
import flagsEuSlice from './FlagsLearnSlices/flagsEuSlice'
import flagsAmericaSlice from './FlagsLearnSlices/flagsAmericaSlice'
import flagsAfricaSlice from './FlagsLearnSlices/flagsAfricaSlice'
import flagsAsiaSlice from './FlagsLearnSlices/flagsAsiaSlice'
import flagsOceaniaSlice from './FlagsLearnSlices/flagsOceaniaSlice'
import { Quiz1Slice, Quiz2Slice, Quiz3Slice, Quiz4Slice, Quiz10Slice, Quiz5Slice, Quiz6Slice, Quiz7Slice, Quiz8Slice, Quiz9Slice} from './FlagsQuizSlices'
import { Capitals1Slice, Capitals2Slice, Capitals3Slice, Capitals4Slice, Capitals5Slice, Capitals6Slice, Capitals7Slice, Capitals8Slice, Capitals9Slice, Capitals10Slice, CapitalsMapsSlice} from './CapitalsQuizSlices'
import { MonEuropeSlice, MonOceaniaSlice, MonAfricaSlice, MonAmericaSlice, MonAsiaSlice } from './MonumentsLearnSlices'
import QuizStatusSlice from '../ReduxSetUp/QuizStatus/QuizStatus'



export const store = configureStore({
    reducer: {
        flags: flagSlice,
        flagsEu: flagsEuSlice,
        flagsAmerica: flagsAmericaSlice,
        flagsAfrica: flagsAfricaSlice,
        flagsAsia: flagsAsiaSlice,
        flagsOceania: flagsOceaniaSlice,
        quiz1Flags: Quiz1Slice,
        quiz2Flags: Quiz2Slice,
        quiz3Flags: Quiz3Slice,
        quiz4Flags: Quiz4Slice,
        quiz5Flags: Quiz5Slice,
        quiz6Flags: Quiz6Slice,
        quiz7Flags: Quiz7Slice,
        quiz8Flags: Quiz8Slice,
        quiz9Flags: Quiz9Slice,
        quiz10Flags: Quiz10Slice,
        quiz1Capitals: Capitals1Slice,
        quiz2Capitals: Capitals2Slice,
        quiz3Capitals: Capitals3Slice,
        quiz4Capitals: Capitals4Slice,
        quiz5Capitals: Capitals5Slice,
        quiz6Capitals: Capitals6Slice,
        quiz7Capitals: Capitals7Slice,
        quiz8Capitals: Capitals8Slice,
        quiz9Capitals: Capitals9Slice,
        quiz10Capitals: Capitals10Slice,
        MonumentsEu: MonEuropeSlice,
        MonumentsOcn: MonOceaniaSlice,
        MonumentsAf: MonAfricaSlice,
        MonumentsAm: MonAmericaSlice,
        MonumentsAsia: MonAsiaSlice,
        quizStatus: QuizStatusSlice,
        CapitalsMapNames: CapitalsMapsSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector