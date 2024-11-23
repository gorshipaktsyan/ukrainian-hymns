import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

export const searchSlice = createSlice({
  name: InitStateNames.search,
  initialState: {
    foundHymns: []
  },
  reducers: {
    setFoundHymns: (state, action) => {
      state.foundHymns = action.payload;
    }
  }
});

export const { setFoundHymns } = searchSlice.actions;

export default searchSlice.reducer;
