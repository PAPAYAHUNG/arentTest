import { combineReducers } from '@reduxjs/toolkit';

import bannerReducer from './slice/bannerSlice';
import mealHistoryReducer from './slice/mealHistorySlice';
import columnReducer from './slice/columnSlice';
import myRecordReducer from './slice/myRecordSlice';

const reducer = combineReducers({
  banner: bannerReducer,
  mealHistory: mealHistoryReducer,
  myRecord: myRecordReducer,
  column: columnReducer,
});

export default reducer;
