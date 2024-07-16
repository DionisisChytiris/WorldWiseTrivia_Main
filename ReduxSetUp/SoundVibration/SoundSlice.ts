import {createSlice} from '@reduxjs/toolkit'

type Status ={
    value: boolean;
}

const initialState: Status = {
    value: false,
}

const SoundSlice = createSlice({
    name: 'soundActive',
    initialState,
    reducers: {
        toggleSound: (state) => {
            state.value = !state.value;
          },
    }
})

export const {toggleSound} = SoundSlice.actions

export default SoundSlice.reducer