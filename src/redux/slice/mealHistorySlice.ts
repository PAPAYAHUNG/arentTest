import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';
import Logger from '../../services/Logger';

const sliceName = 'mealHistory';

export const fetchMealHistory = createAsyncThunk(
  `${sliceName}/fetchMealHistory`,
  async ({ isAppendList = false }: { isAppendList?: boolean }) => {
    try {
      const { mealHistory: mealHistoryURL } = API_URL();
      const response = await axios.get(mealHistoryURL);
      console.log({isAppendList});
      return { ...response, isAppendList };
    } catch (error: any) {
      Logger.log(error);
    }
  },
);

interface ViewingHistoryProps {
  mealHistoryList: any;
  total:number
  notification:number
  isLoading: boolean;
}

const initialState = {
  mealHistoryList: [],
  total:0,
  isLoading: true,
  notification:0
} as ViewingHistoryProps;

const mealHistorySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMealHistory.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMealHistory.fulfilled, (state, { payload }) => {
      const { data, isAppendList }:any = payload;
      state.isLoading = false;
      state.total = data?.total;
      state.notification = data?.notification;
      // If the mealHistoryList already have data and the boolean flag isAppendList = true
      // then will append the list (use for browse more button)
      state.mealHistoryList = state.mealHistoryList && isAppendList ? state.mealHistoryList?.concat(data?.meals) : data?.meals;
    });

    builder.addCase(fetchMealHistory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions } = mealHistorySlice;

export default mealHistorySlice.reducer;
