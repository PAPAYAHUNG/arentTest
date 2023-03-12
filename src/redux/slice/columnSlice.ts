import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';
import Logger from '../../services/Logger';

const sliceName = 'column';

export const fetchColumn = createAsyncThunk(
  `${sliceName}/fetchColumn`,
  async ({ isAppendList = false }: { isAppendList?: boolean }) => {
    try {
      const { column: columnURL } = API_URL();
      const response = await axios.get(columnURL);
      console.log({ isAppendList });

      return { ...response, isAppendList };
    } catch (error: any) {
      Logger.log(error);
    }
  },
);

interface ColumnProps {
  columnList: any;
  excerciseList: any;
  isLoading: boolean;
  total: number;
}

const initialState = {
  columnList: [],
  isLoading: true,
  total: 0,
} as ColumnProps;

const columnSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColumn.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchColumn.fulfilled, (state, { payload }) => {
      const { data, isAppendList }: any = payload;
      state.isLoading = false;
      state.total = data?.total;

      // If the columnList already have data and the boolean flag isAppendList = true
      // then will append the list (use for browse more button)
      state.columnList =
        state.columnList && isAppendList
          ? state.columnList?.concat(data?.columnList)
          : data?.columnList;
    });

    builder.addCase(fetchColumn.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions } = columnSlice;

export default columnSlice.reducer;
