import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({userType, businessName, username, password}, {rejectWithValue}) => {
    console.log('userType', userType);
    try {
      const response = await axios.post(BASE_URL + 'login', {
        userType,
        businessName,
        username,
        password,
      },{headers:{"Content-Type":'application/x-www-form-urlencoded'}});
      console.log('response:', response.data);
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userType: null,
    permission: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('action', action);
        state.loading = false;
        state.userType = action.payload.data.userType;
        state.permission = action.payload.data.permission;
        state.token = action.payload.data.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'Login failed';
      });
  },
});

export default authSlice.reducer;
