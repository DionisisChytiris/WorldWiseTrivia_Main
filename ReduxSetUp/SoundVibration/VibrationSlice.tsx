import { createSlice } from "@reduxjs/toolkit";

type Status = {
  value: boolean;
};

const initialState: Status = {
  value: false,
};

const VibrationSlice = createSlice({
  name: "vibrationActive",
  initialState,
  reducers: {
    // toggle: ()=>initialState
    toggle: (state) => {
      state.value  = !state.value;
    },
    setFalse: (state) => {
      state.value = false;
    },
    setTrue: (state) => {
      state.value = true;
    },
    // statusActive: ()=>{return {initStatus: 'false'}},
    // statusCancel: ()=>{return {initStatus: 'false'}},
  },
});

export const { toggle, setFalse, setTrue } = VibrationSlice.actions;

export default VibrationSlice.reducer;
