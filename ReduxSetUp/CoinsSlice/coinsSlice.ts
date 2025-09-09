// scoreSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  coins: 0,
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    incrementCoins: (state) => {
      state.coins += 5;
    },
    incrementCoinsBonus: (state) => {
      state.coins += 50;
    },
    decrementCoins: (state, action) => {
      state.coins -= action.payload;
    },
  },
});

// AsyncStorage logic for saving and loading coins
export const loadCoins = () => async (dispatch) => {
  try {
    const storedCoins = await AsyncStorage.getItem('coins');
    if (storedCoins !== null) {
      dispatch(setCoins(Number(storedCoins)));
    }
  } catch (error) {
    console.error("Error loading coins from AsyncStorage", error);
  }
};

export const saveCoins = (coins) => async (dispatch) => {
  try {
    await AsyncStorage.setItem('coins', coins.toString());
  } catch (error) {
    console.error("Error saving coins to AsyncStorage", error);
  }
};

export const { setCoins, incrementCoins, decrementCoins, incrementCoinsBonus } = coinsSlice.actions;

export const coinsReducer = coinsSlice.reducer;
