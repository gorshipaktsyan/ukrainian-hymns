import storage from 'redux-persist/lib/storage';

import { InitStateNames } from './constants';

const persistConfig = {
  key: 'ru-hymns',
  storage,
  whitelist: [InitStateNames.bookmarks, InitStateNames.history, InitStateNames.settings]
};

export default persistConfig;
