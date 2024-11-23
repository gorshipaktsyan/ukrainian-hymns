import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { hymnsService } from '../../services';

export const hymnsSlice = createSlice({
  name: InitStateNames.hymns,
  initialState: {
    hymns: hymnsService.get() || [],
    filteredHymns: []
  },
  reducers: {}
});

export default hymnsSlice.reducer;
