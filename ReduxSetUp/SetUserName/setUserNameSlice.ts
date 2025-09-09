import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadName = createAsyncThunk('user/loadName', async () => {
  const savedName = await AsyncStorage.getItem('userName');
  return savedName || '';
});

export const setUserNameSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    status: 'idle'
  },
  reducers: {
    setNameInput: (state, action) => {
      state.name = action.payload;
      AsyncStorage.setItem('userName', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadName.fulfilled, (state, action) => {
        state.name = action.payload;
        state.status = 'idle';
      })
      .addCase(loadName.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setNameInput } = setUserNameSlice.actions;
export default setUserNameSlice.reducer;