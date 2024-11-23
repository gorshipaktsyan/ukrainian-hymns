import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const currentNumberSlice = createSlice({
  name: InitStateNames.currentNumber,
  initialState: {
    currentNumber: []
  },
  reducers: {
    setCurrentNumber: (state, action) => {
      state.currentNumber = action.payload;
    }
  }
});

export const { setCurrentNumber } = currentNumberSlice.actions;

export default currentNumberSlice.reducer;
