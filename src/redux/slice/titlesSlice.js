import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { titlesService } from '../../services';

export const titlesSlice = createSlice({
  name: InitStateNames.titles,
  initialState: {
    titles: titlesService.get() || []
  },
  reducers: {}
});

export default titlesSlice.reducer;
