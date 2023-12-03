import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';

export const fetchPolitics = createAsyncThunk('educations/fetchEducations', async () => {
  const response = await axios.get(BASE_URL +'get-educations');
  return  response.data;
});

const educationsSlice = createSlice({
  name: 'educations',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolitics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPolitics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPolitics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { actions } = educationsSlice;
export default educationsSlice.reducer;
