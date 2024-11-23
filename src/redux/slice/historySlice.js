import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const historySlice = createSlice({
  name: InitStateNames.history,
  initialState: {
    searchedHymns: [],
    isConfirmOpen: false
  },
  reducers: {
    clearHistory: (state) => {
      state.searchedHymns = [];
    },
    addHymn: (state, action) => {
      state.searchedHymns.unshift(action.payload);
    },

    setIsConfirmOpen: (state, action) => {
      state.isConfirmOpen = action.payload;
    }
  }
});

export const { clearHistory, addHymn, setIsConfirmOpen } = historySlice.actions;

export default historySlice.reducer;
