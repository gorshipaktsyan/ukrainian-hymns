import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const contentSlice = createSlice({
  name: InitStateNames.content,
  initialState: {
    titleId: '',
    subtitleId: ''
  },
  reducers: {
    resetContentValues: (state) => {
      state.titleId = '';
      state.subtitleId = '';
    },
    setTitleId: (state, action) => {
      state.titleId = action.payload;
    },
    setSubtitleId: (state, action) => {
      state.subtitleId = action.payload;
    }
  }
});

export const { resetContentValues, setTitleId, setSubtitleId } = contentSlice.actions;

export default contentSlice.reducer;
