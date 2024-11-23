import { combineReducers } from '@reduxjs/toolkit';

import alphabeticalIndexReducer from './slice/alphabeticalSlice';
import appBarReducer from './slice/appBarSlice';
import bookmarksReducer from './slice/bookmarksSlice';
import contentSliceReducer from './slice/contentSlice';
import currentNumberReducer from './slice/currentNumberSlice';
import drawerReducer from './slice/drawerSlice';
import historyReducer from './slice/historySlice';
import hymnsReducer from './slice/hymnsSlice';
import searchReducer from './slice/searchSlice';
import settingsReducer from './slice/settingsSlice';
import subtitlesReducer from './slice/subtitlesSlice';
import titlesReducer from './slice/titlesSlice';

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  content: contentSliceReducer,
  currentNumber: currentNumberReducer,
  drawer: drawerReducer,
  history: historyReducer,
  search: searchReducer,
  settings: settingsReducer,
  appBar: appBarReducer,
  hymns: hymnsReducer,
  titles: titlesReducer,
  subtitles: subtitlesReducer,
  alphabeticalIndex: alphabeticalIndexReducer
});

export default rootReducer;
