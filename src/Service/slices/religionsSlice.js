import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReligions = createAsyncThunk('religions/fetchReligions', async () => {
  const response = await axios.get('http://firstclass.customerdevsites.com/api/get-religions');
  return  response.data;
});

const religionsSlice = createSlice({
  name: 'religions',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReligions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReligions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchReligions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { actions } = religionsSlice;
export default religionsSlice.reducer;
