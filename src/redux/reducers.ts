import { combineReducers } from '@reduxjs/toolkit';

import bannerReducer from './slice/bannerSlice';
import mealHistoryReducer from './slice/mealHistorySlice';


const reducer = combineReducers({
  banner: bannerReducer,
  mealHistory: mealHistoryReducer

});

export default reducer;
