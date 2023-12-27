import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../Utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';


const INITIAL_STATE = {
  loginResponse: null,
  error: null,
  loading: false,
  userData:[]
};
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
      });
      console.log('response:', response.data);
      

      return response?.data;
    } catch (error) {
      console.log('Error:', error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  reducers: {
    setUserData:(state,action)=>{
      state.userData = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('action', action);
        state.loading = false;  
        state.error = null;
        state.loginResponse = action?.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.loading = false;
        state.error = action?.payload?.error ? action.payload.error : 'Something went wrong';
      });
  },
});
export const {setUserData} = authSlice.actions
export default authSlice.reducer;
