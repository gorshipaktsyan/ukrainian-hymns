import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames, russian } from '../../config/constants';

export const settingsSlice = createSlice({
  name: InitStateNames.settings,
  initialState: {
    fontSize: 1,
    isEngSearchVisible: false,
    isAllowToUseArrows: false,
    isMobile: navigator.maxTouchPoints > 0,
    language: russian
  },
  reducers: {
    changeFontSize: (state, action) => {
      state.fontSize = Number(action.payload.toFixed(1));
    },
    setIsEngSearchVisible: (state, action) => {
      state.isEngSearchVisible = action.payload;
    },
    setIsAllowToUseArrows: (state, action) => {
      state.isAllowToUseArrows = action.payload;
    }
  }
});

export const { changeFontSize, setIsEngSearchVisible, setIsAllowToUseArrows } =
  settingsSlice.actions;

export default settingsSlice.reducer;
