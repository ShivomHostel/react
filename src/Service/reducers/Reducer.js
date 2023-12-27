import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import GetUserHostelSlice from '../slices/GetUserHostelSlice';
import getBasicRoomDetailsSlice from '../slices/getBasicRoomDetailsSlice';
import GetRoomsSlice from '../slices/GetRoomsSlice';
import RegisterSlice from '../slices/RegisterSlice';
import expensesSlice from '../slices/expensesSlice';

const rootReducer = combineReducers({
  // Reducers init
  auth: authSlice,
  hostelNames: GetUserHostelSlice,
  basicRoomDetails: getBasicRoomDetailsSlice,
  roomData: GetRoomsSlice,
  registerData: RegisterSlice,
  expensesData: expensesSlice,
});

export default rootReducer;
