import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';

export const fetchPhone = createAsyncThunk(
  'educations/fetchPhone',
  async (payload) => {
    const response = await axios.post(BASE_URL + 'get-phone', payload);
    return response.data;
  });

const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhone.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhone.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPhone.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { actions } = phoneSlice;
export default phoneSlice.reducer;
