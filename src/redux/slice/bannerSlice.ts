import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/api';

const sliceName = 'banner';

interface LineSliceProps {
  isLoading: boolean;
  data: any;
  error: any;
}

const INITIAL_STATE: LineSliceProps = {
  isLoading: true,
  data: {},
  error: null,
};

export const fetchBanner = createAsyncThunk(`${sliceName}/fetchBanner`, async () => {
  const { banner: bannerURL } = API_URL();
  // In reality I will fetch the data with the API like below
  // const response = await axios.get(bannerURL);

  // In this test I will fetch the data from JSON

  console.log({bannerURL});
  
  const response = await axios.get(bannerURL);
  return response?.data
});

export const bannerSlice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanner.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBanner.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBanner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { actions } = bannerSlice;

export default bannerSlice.reducer;
