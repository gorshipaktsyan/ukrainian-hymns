import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const drawerSlice = createSlice({
  name: InitStateNames.drawer,
  initialState: {
    isDrawerOpen: false
  },
  reducers: {
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    }
  }
});

export const { setIsDrawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
