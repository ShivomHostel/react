import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import BASE_URL from '../../Utils/config';
import axios from 'axios';

const INITIAL_STATE = {
  data: null,
  error: null,
  status: 'idle',
};

export const handleUserHostelAPI = createAsyncThunk(
  'AllHostels/handleUserHostelAPI',
  async phoneNumber => {
    const response = await axios.get(BASE_URL + 'hostelname/' + phoneNumber);
    return response.data;
  },
);

const getUserHostelSlice = createSlice({
  name: 'hostelNames',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleUserHostelAPI.pending, state => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(handleUserHostelAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.status = 'success';
        state.error = null;
        state.data = action?.payload.data;
      })
      .addCase(handleUserHostelAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default getUserHostelSlice.reducer;
