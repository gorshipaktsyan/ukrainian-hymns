import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { subtitlesService } from '../../services';

export const subtitlesSlice = createSlice({
  name: InitStateNames.subtitles,
  initialState: {
    subtitles: subtitlesService.get() || []
  },
  reducers: {}
});

export default subtitlesSlice.reducer;
