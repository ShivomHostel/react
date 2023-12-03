import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';

export const fetchIntrests = createAsyncThunk('intrests/fetchIntrests', async () => {
  const response = await axios.get(BASE_URL +'get-intrests');
  return  response.data;
});

const intrestsSlice = createSlice({
  name: 'intrests',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIntrests.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIntrests.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchIntrests.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { actions } = intrestsSlice;
export default intrestsSlice.reducer;
