import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const appBarSlice = createSlice({
  name: InitStateNames.appBar,
  initialState: {
    title: '',
    isSaved: false
  },
  reducers: {
    setAppBarTitle: (state, action) => {
      state.title = action.payload;
    },
    setIsSaved: (state, action) => {
      state.isSaved = action.payload;
    }
  }
});

export const { setAppBarTitle, setIsSaved } = appBarSlice.actions;

export default appBarSlice.reducer;
