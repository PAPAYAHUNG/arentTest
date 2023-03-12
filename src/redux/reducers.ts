import { combineReducers } from '@reduxjs/toolkit';

import bannerReducer from './slice/bannerSlice';
import mealHistoryReducer from './slice/mealHistorySlice';
import myRecordReducer from './slice/myRecordSlice';


const reducer = combineReducers({
  banner: bannerReducer,
  mealHistory: mealHistoryReducer,
  myRecord:myRecordReducer

});

export default reducer;
