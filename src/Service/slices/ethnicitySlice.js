import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';

export const fetchEthnicity = createAsyncThunk('ethnicity/fetchEthnicity', async () => {
  const response = await axios.get(BASE_URL +'get-ethnicities');
  return  response.data;
});

const ethnicitySlice = createSlice({
  name: 'ethnicity',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEthnicity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEthnicity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEthnicity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { actions } = ethnicitySlice;
export default ethnicitySlice.reducer;
