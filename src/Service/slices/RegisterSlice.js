import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import BASE_URL from '../../Utils/config';
import axios from 'axios';
import {
  deleteMainRegisterThunkAPI,
  deleteOldStudentRecordsThunkAPI,
  deleteStudentBookingThunkAPI,
  restoreOldToMainRegisterThunkAPI,
  switchRoomMainRegisterThunkAPI,
} from '../api/thunks';

const INITIAL_STATE = {
  registerListResponse: {
    response: [],
    loading: false,
  },
  registerBasicDataResponse: {
    response: [],
    loading: false,
  },
  getSelfRegisterStudentsResponse: {
    response: [],
    loading: false,
  },
  deleteSelfStudentResponse: {
    response: [],
    loading: false,
  },
  deleteMainRegisterResponse: {
    response: [],
    loading: false,
  },
  deleteStudentBookingResponse: {
    response: [],
    loading: false,
  },
  getOldStudentRegisterResponse: {
    response: [],
    loading: false,
  },
  restoreOldToMainRegisterResponse: {
    response: [],
    loading: false,
  },
  deleteOldStudentRecordsResponse: {
    response: [],
    loading: false,
  },
  roomsListResponse: {
    response: [],
    loading: false,
  },
  seatsListResponse: {
    response: [],
    loading: false,
  },
  formNumberResponse: {
    response: [],
    loading: false,
  },
  studentRegisterationResponse: {
    response: [],
    loading: false,
  },
  switchRoomMainRegisterResponse: {
    response: [],
    loading: false,
  },
};

export const handleRegistrationListAPI = createAsyncThunk(
  'Registeration/handleRegistrationListAPI',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getRegistrationData', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);
export const handleBasicRegisterDetails = createAsyncThunk(
  'Registeration/handleBasicRegisterDetails',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getBasicRegisterDetails', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const getSelfRegisterStudentsThunkAPI = createAsyncThunk(
  'Registeration/getSelfRegisterStudentsThunkAPI',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getSelfRegisterStudents', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);
export const deleteSelfStudentThunkAPI = createAsyncThunk(
  'Registeration/deleteSelfStudentThunkAPI',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.delete(BASE_URL + 'deleteSelfStudent/' + id, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const getOldStudentRegisterThunkAPI = createAsyncThunk(
  'Registeration/getOldStudentRegisterThunkAPI',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getOldStudentRegister', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const GetRoomsListApi = createAsyncThunk(
  'Registeration/GetRoomsListApi',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    console.log('thunkApi', token);

    const response = await axios.get(BASE_URL + 'getRoomNo', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const GetSeatsListApi = createAsyncThunk(
  'Registeration/GetSeatsListApi',
  async (params, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getSeatNo/' + params.roomNo, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const GetFormNo = createAsyncThunk(
  'Registeration/GetFormNo',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;

    const response = await axios.get(BASE_URL + 'getFormNo', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const studentRegisterApi = createAsyncThunk(
  'Registeration/studentRegisterApi',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    console.log('ander data h ', data);
    const response = await axios.post(BASE_URL + 'studentRegister', data, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
);

const registerSlice = createSlice({
  name: 'Registeration',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleRegistrationListAPI.pending, state => {
        state.registerListResponse.loading = true;
      })
      .addCase(handleRegistrationListAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.registerListResponse.loading = false;
        state.registerListResponse.response = action?.payload?.data;
      })
      .addCase(handleRegistrationListAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.registerListResponse.loading = false;
        state.registerListResponse.error = action?.error?.message;
        state = {
          ...state,
          registerListResponse: INITIAL_STATE.registerListResponse,
        };
      })
      .addCase(handleBasicRegisterDetails.pending, state => {
        state.registerBasicDataResponse.loading = true;
      })
      .addCase(handleBasicRegisterDetails.fulfilled, (state, action) => {
        state.registerBasicDataResponse.loading = false;
        state.registerBasicDataResponse.response = action?.payload?.data;
      })
      .addCase(handleBasicRegisterDetails.rejected, (state, action) => {
        state.registerBasicDataResponse.error = action?.error?.message;
        state = {
          ...state,
          registerBasicDataResponse: INITIAL_STATE.registerBasicDataResponse,
        };
      })
      .addCase(getSelfRegisterStudentsThunkAPI.pending, state => {
        state.getSelfRegisterStudentsResponse.loading = true;
      })
      .addCase(getSelfRegisterStudentsThunkAPI.fulfilled, (state, action) => {
        state.getSelfRegisterStudentsResponse.loading = false;
        state.getSelfRegisterStudentsResponse.response = action?.payload?.data;
      })
      .addCase(getSelfRegisterStudentsThunkAPI.rejected, (state, action) => {
        state.getSelfRegisterStudentsResponse.error = action?.error?.message;
        state = {
          ...state,
          getSelfRegisterStudentsResponse:
            INITIAL_STATE.getSelfRegisterStudentsResponse,
        };
      })
      .addCase(deleteSelfStudentThunkAPI.pending, state => {
        state.deleteSelfStudentResponse.loading = true;
      })
      .addCase(deleteSelfStudentThunkAPI.fulfilled, (state, action) => {
        state.deleteSelfStudentResponse.loading = false;
        state.deleteSelfStudentResponse.response = action?.payload?.data;
      })
      .addCase(deleteSelfStudentThunkAPI.rejected, (state, action) => {
        state.deleteSelfStudentResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteSelfStudentResponse: INITIAL_STATE.deleteSelfStudentResponse,
        };
      })
      .addCase(deleteStudentBookingThunkAPI.pending, state => {
        state.deleteStudentBookingResponse.loading = true;
      })
      .addCase(deleteStudentBookingThunkAPI.fulfilled, (state, action) => {
        state.deleteStudentBookingResponse.loading = false;
        state.deleteStudentBookingResponse.response = action?.payload?.data;
      })
      .addCase(deleteStudentBookingThunkAPI.rejected, (state, action) => {
        state.deleteStudentBookingResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteStudentBookingResponse:
            INITIAL_STATE.deleteStudentBookingResponse,
        };
      })
      .addCase(deleteMainRegisterThunkAPI.pending, state => {
        state.deleteMainRegisterResponse.loading = true;
      })
      .addCase(deleteMainRegisterThunkAPI.fulfilled, (state, action) => {
        state.deleteMainRegisterResponse.loading = false;
        state.deleteMainRegisterResponse.response = action?.payload?.data;
      })
      .addCase(deleteMainRegisterThunkAPI.rejected, (state, action) => {
        state.deleteMainRegisterResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteMainRegisterResponse: INITIAL_STATE.deleteMainRegisterResponse,
        };
      })
      .addCase(switchRoomMainRegisterThunkAPI.pending, state => {
        state.switchRoomMainRegisterResponse.loading = true;
      })
      .addCase(switchRoomMainRegisterThunkAPI.fulfilled, (state, action) => {
        state.switchRoomMainRegisterResponse.loading = false;
        state.switchRoomMainRegisterResponse.response = action?.payload?.data;
      })
      .addCase(switchRoomMainRegisterThunkAPI.rejected, (state, action) => {
        state.switchRoomMainRegisterResponse.error = action?.error?.message;
        state = {
          ...state,
          switchRoomMainRegisterResponse:
            INITIAL_STATE.switchRoomMainRegisterResponse,
        };
      })
      .addCase(restoreOldToMainRegisterThunkAPI.pending, state => {
        state.restoreOldToMainRegisterResponse.loading = true;
      })
      .addCase(restoreOldToMainRegisterThunkAPI.fulfilled, (state, action) => {
        state.restoreOldToMainRegisterResponse.loading = false;
        state.restoreOldToMainRegisterResponse.response = action?.payload?.data;
      })
      .addCase(restoreOldToMainRegisterThunkAPI.rejected, (state, action) => {
        state.restoreOldToMainRegisterResponse.error = action?.error?.message;
        state = {
          ...state,
          restoreOldToMainRegisterResponse:
            INITIAL_STATE.restoreOldToMainRegisterResponse,
        };
      })
      .addCase(getOldStudentRegisterThunkAPI.pending, state => {
        state.getOldStudentRegisterResponse.loading = true;
      })
      .addCase(getOldStudentRegisterThunkAPI.fulfilled, (state, action) => {
        state.getOldStudentRegisterResponse.loading = false;
        state.getOldStudentRegisterResponse.response = action?.payload?.data;
      })
      .addCase(getOldStudentRegisterThunkAPI.rejected, (state, action) => {
        state.getOldStudentRegisterResponse.error = action?.error?.message;
        state = {
          ...state,
          getOldStudentRegisterResponse:
            INITIAL_STATE.getOldStudentRegisterResponse,
        };
      })
      .addCase(deleteOldStudentRecordsThunkAPI.pending, state => {
        state.deleteOldStudentRecordsResponse.loading = true;
      })
      .addCase(deleteOldStudentRecordsThunkAPI.fulfilled, (state, action) => {
        state.deleteOldStudentRecordsResponse.loading = false;
        state.deleteOldStudentRecordsResponse.response = action?.payload?.data;
      })
      .addCase(deleteOldStudentRecordsThunkAPI.rejected, (state, action) => {
        state.deleteOldStudentRecordsResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteOldStudentRecordsResponse:
            INITIAL_STATE.deleteOldStudentRecordsResponse,
        };
      })
      .addCase(GetRoomsListApi.pending, state => {
        state.roomsListResponse.loading = true;
      })
      .addCase(GetRoomsListApi.fulfilled, (state, action) => {
        state.roomsListResponse.loading = false;
        state.roomsListResponse.response = action?.payload;
      })
      .addCase(GetRoomsListApi.rejected, (state, action) => {
        state.roomsListResponse.error = action?.error?.message;
        state = {
          ...state,
          roomsListResponse: INITIAL_STATE.roomsListResponse,
        };
      })
      .addCase(GetSeatsListApi.pending, state => {
        state.seatsListResponse.loading = true;
      })
      .addCase(GetSeatsListApi.fulfilled, (state, action) => {
        console.log('action', action);
        state.seatsListResponse.loading = false;
        state.seatsListResponse.response = action?.payload;
      })
      .addCase(GetSeatsListApi.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.seatsListResponse.error = action?.error?.message;
        state = {
          ...state,
          seatsListResponse: INITIAL_STATE.seatsListResponse,
        };
      })
      .addCase(GetFormNo.pending, state => {
        state.formNumberResponse.loading = true;
      })
      .addCase(GetFormNo.fulfilled, (state, action) => {
        state.formNumberResponse.loading = false;
        state.formNumberResponse.response = action?.payload;
      })
      .addCase(GetFormNo.rejected, (state, action) => {
        state.formNumberResponse.loading = false;
        state.formNumberResponse.error = action?.error?.message;
        state = {
          ...state,
          formNumberResponse: INITIAL_STATE.formNumberResponse,
        };
      })
      .addCase(studentRegisterApi.pending, state => {
        state.studentRegisterationResponse.loading = true;
      })
      .addCase(studentRegisterApi.fulfilled, (state, action) => {
        state.studentRegisterationResponse.loading = false;
        state.studentRegisterationResponse.response = action?.payload;
      })
      .addCase(studentRegisterApi.rejected, (state, action) => {
        console.log('action Rejected', action);

        state.studentRegisterationResponse.loading = false;
        state.studentRegisterationResponse.error = action?.error?.message;
        state = {
          ...state,
          studentRegisterationResponse:
            INITIAL_STATE.studentRegisterationResponse,
        };
      });
  },
});

export default registerSlice.reducer;
