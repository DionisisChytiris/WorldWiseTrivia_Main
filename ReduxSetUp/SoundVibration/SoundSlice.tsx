import {createSlice} from '@reduxjs/toolkit'

type Status ={
    initStatus: string
}

const initialState: Status = {
    initStatus: 'false'
}

const SoundSlice = createSlice({
    name: 'soundActive',
    initialState,
    reducers: {
        statusActive: ()=>{return {initStatus: 'true'}},
        statusCancel: ()=>{return {initStatus: 'false'}},
    }
})

export const {statusActive, statusCancel} = SoundSlice.actions

export default SoundSlice.reducer