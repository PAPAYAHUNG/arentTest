import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';
import Logger from '../../services/Logger';

const sliceName = 'myRecord';

export const fetchMyRecord = createAsyncThunk(
  `${sliceName}/fetchMyRecord`,
  async ({ isAppendList = false }: { isAppendList?: boolean }) => {
    try {
      const { myRecord: myRecordURL } = API_URL();
      const response = await axios.get(myRecordURL);
      console.log({isAppendList});
      
      return { ...response, isAppendList };
    } catch (error: any) {
      Logger.log(error);
    }
  },
);

interface ViewingHistoryProps {
  myRecordList: any;
  excerciseList:any
  diaryRecord:any
  isLoading: boolean;
}

const initialState = {
  myRecordList: [],
  isLoading: true,
  excerciseList:[],
  diaryRecord:[]
} as ViewingHistoryProps;

const myRecordSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyRecord.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMyRecord.fulfilled, (state, { payload }) => {
      const { data, isAppendList }:any = payload;
      state.isLoading = false;
      state.excerciseList = data?.excerciseRecord;
      state.diaryRecord = data?.diaryRecord;

      // If the myRecordList already have data and the boolean flag isAppendList = true
      // then will append the list (use for browse more button)
      state.myRecordList = state.myRecordList && isAppendList ? state.myRecordList?.concat(data?.chart) : data?.chart;
    });

    builder.addCase(fetchMyRecord.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions } = myRecordSlice;

export default myRecordSlice.reducer;
