import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/api';

const sliceName = 'banner';

export interface BannerSliceProps {
  isLoading: boolean;
  data: any;
  error: any;
}

const INITIAL_STATE: BannerSliceProps = {
  isLoading: true,
  data: {},
  error: null,
};

export const fetchBanner = createAsyncThunk(`${sliceName}/fetchBanner`, async () => {
  const { banner: bannerURL } = API_URL();
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
