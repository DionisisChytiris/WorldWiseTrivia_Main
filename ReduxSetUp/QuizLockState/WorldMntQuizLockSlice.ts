import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage Key
const STORAGE_KEY = "quizLockStateWorldMnt";

// Load state from AsyncStorage
export const loadQuizLockState = createAsyncThunk(
  "quiz/loadState",
  async () => {
    const savedState = await AsyncStorage.getItem(STORAGE_KEY);
    return savedState
      ? JSON.parse(savedState)
      : {
          quiz1: false, // false means UNLOCKED
          quiz2: true,  // true means LOCKED
          quiz3: true,
          quiz4: true,
          quiz5: true,
          quiz6: true,
          quiz7: true,
          quiz8: true,
          quiz9: true,
          quiz10: true,
        };
  }
);

// Save state to AsyncStorage
const saveQuizLockState = async (state: any) => {
  const stateToSave = { ...state };
  delete stateToSave.isLoaded; // don’t save meta field
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  console.log("Saved QuizLock to AsyncStorage:", stateToSave);
};

// Initial State
const initialState = {
  quiz1: false, // first quiz unlocked by default
  quiz2: true,
  quiz3: true,
  quiz4: true,
  quiz5: true,
  quiz6: true,
  quiz7: true,
  quiz8: true,
  quiz9: true,
  quiz10: true,
  isLoaded: false,
};

const quizLockWorldMntSlice = createSlice({
  name: "quizLockWorldMnt",
  initialState,
  reducers: {
    setQuizLockWorldMnt: (state, action: PayloadAction<{ id: string; locked: boolean }>) => {
      const key = `quiz${action.payload.id}` as keyof typeof state;
      if (key in state) {
        (state as any)[key] = action.payload.locked;
        saveQuizLockState(state);
      }
    },
    clearQuizLockWorldMntState: (state) => {
      Object.keys(state).forEach((key) => {
        if (key.startsWith("quiz")) {
          (state as any)[key] = true;
        }
      });
      state.quiz1 = false; // keep quiz1 unlocked
      saveQuizLockState(state);
      console.log("Quiz lock state reset");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuizLockState.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.isLoaded = true;
    });
  },
});

export const { setQuizLockWorldMnt, clearQuizLockWorldMntState } = quizLockWorldMntSlice.actions;
export default quizLockWorldMntSlice.reducer;
