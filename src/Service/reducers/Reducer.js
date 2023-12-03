import { combineReducers } from '@reduxjs/toolkit'; 
import authSlice from '../slices/authSlice';
 
const rootReducer = combineReducers({
   // Reducers init
   auth:authSlice

});

export default rootReducer;
