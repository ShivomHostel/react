import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import rootReducer from './reducers/Reducer';
  
const store = configureStore({
  reducer:{
    root:rootReducer,
  }
});

export default store;