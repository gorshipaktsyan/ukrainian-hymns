import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const alphabeticalIndexSlice = createSlice({
  name: InitStateNames.alphabeticalIndex,
  initialState: {
    letter: ''
  },
  reducers: {
    setLetter: (state, action) => {
      state.letter = action.payload;
    }
  }
});

export const { setLetter } = alphabeticalIndexSlice.actions;

export default alphabeticalIndexSlice.reducer;
