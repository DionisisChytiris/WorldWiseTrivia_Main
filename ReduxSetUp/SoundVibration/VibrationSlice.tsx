import { createSlice } from "@reduxjs/toolkit";

type BooleanState = {
  value: boolean;
};

const initialState: BooleanState = {
  value: true,
};

const VibrationSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    toggleBoolean: (state) => {
      state.value = !state.value;
    },
  }
});

export const { toggleBoolean } = VibrationSlice.actions;

export default VibrationSlice.reducer;
