import { combineReducers } from '@reduxjs/toolkit';

import bannerReducer from './slice/bannerSlice';


const reducer = combineReducers({
  banner: bannerReducer,

});

export default reducer;
