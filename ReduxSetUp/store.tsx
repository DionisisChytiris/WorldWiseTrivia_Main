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
import { Monuments1Slice, Monuments2Slice, Monuments3Slice, Monuments4Slice, Monuments5Slice, Monuments6Slice, Monuments7Slice, Monuments8Slice, Monuments9Slice ,Monuments10Slice, MonumentsMapSlice } from './MonumentsQuizSlices'
import { MonEuropeSlice, MonOceaniaSlice, MonAfricaSlice, MonAmericaSlice, MonAsiaSlice } from './MonumentsLearnSlices'
import { NaturalAsiaSlice, NaturalEurSlice, NaturalAmerSlice, NaturalAfrSlice, NaturalOceanSlice} from './NaturalMntLearnSlices'
import QuizStatusSlice from './QuizStatus/QuizStatus'
import SoundSlice from './SoundVibration/SoundSlice'
import VibrationSlice from './SoundVibration/VibrationSlice'
import {NaturalMnt1Slice, NaturalMnt2Slice, NaturalMnt3Slice, NaturalMnt4Slice, NaturalMnt5Slice, NaturalMnt6Slice, NaturalMnt7Slice, NaturalMnt8Slice, NaturalMnt9Slice, NaturalMnt10Slice,NaturalMntMapSlice} from './NaturalMntQuizSlices'
import { MixedQuiz1Slice, MixedQuiz2Slice, MixedQuiz3Slice, MixedQuiz4Slice, MixedQuiz5Slice, MixedQuiz6Slice, MixedQuiz7Slice, MixedQuiz8Slice, MixedQuiz9Slice, MixedQuiz10Slice } from './MixedQuizSlices'
import LanguageSlice from './LanguageSlice/LanguageSlice'

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
        quiz1Monuments: Monuments1Slice,
        quiz2Monuments: Monuments2Slice,
        quiz3Monuments: Monuments3Slice,
        quiz4Monuments: Monuments4Slice,
        quiz5Monuments: Monuments5Slice,
        quiz6Monuments: Monuments6Slice,
        quiz7Monuments: Monuments7Slice,
        quiz8Monuments: Monuments8Slice,
        quiz9Monuments: Monuments9Slice,
        quiz10Monuments: Monuments10Slice,
        quiz1NaturalMnts: NaturalMnt1Slice,
        quiz2NaturalMnts: NaturalMnt2Slice,
        quiz3NaturalMnts: NaturalMnt3Slice,
        quiz4NaturalMnts: NaturalMnt4Slice,
        quiz5NaturalMnts: NaturalMnt5Slice,
        quiz6NaturalMnts: NaturalMnt6Slice,
        quiz7NaturalMnts: NaturalMnt7Slice,
        quiz8NaturalMnts: NaturalMnt8Slice,
        quiz9NaturalMnts: NaturalMnt9Slice,
        quiz10NaturalMnts: NaturalMnt10Slice,
        quizStatus: QuizStatusSlice,
        CapitalsMapNames: CapitalsMapsSlice,
        MonumentMapNames: MonumentsMapSlice,
        NaturalMntMapNames: NaturalMntMapSlice,
        soundActive: SoundSlice,
        boolean: VibrationSlice,
        NaturalEur: NaturalEurSlice,
        NaturalAsia: NaturalAsiaSlice,
        NaturalAmer: NaturalAmerSlice,
        NaturalAfr: NaturalAfrSlice,
        NaturalOcea: NaturalOceanSlice,
        quiz1MixedQst: MixedQuiz1Slice,
        quiz2MixedQst: MixedQuiz2Slice,
        quiz3MixedQst: MixedQuiz3Slice,
        quiz4MixedQst: MixedQuiz4Slice,
        quiz5MixedQst: MixedQuiz5Slice,
        quiz6MixedQst: MixedQuiz6Slice,
        quiz7MixedQst: MixedQuiz7Slice,
        quiz8MixedQst: MixedQuiz8Slice,
        quiz9MixedQst: MixedQuiz9Slice,
        quiz10MixedQst: MixedQuiz10Slice,
        lngTri18NextName: LanguageSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector