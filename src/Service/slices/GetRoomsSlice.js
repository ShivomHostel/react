import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import BASE_URL from '../../Utils/config';
import axios from 'axios';

const INITIAL_STATE = {
  roomsListResponse: {
    response: [],
    loading: false,
  },
  roomsBasicDataResponse: {
    response: [],
    loading: false,
  },
  createRoomDataResponse: {
    response: [],
    loading: false,
  },
  deleteRoomResponse: {
    response: [],
    loading: false,
  },
  updateRoomResponse: {
    response: [],
    loading: false,
  },
};

export const handleRoomsListAPI = createAsyncThunk(
  'Rooms/handleRoomsListAPI',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    const response = await axios.get(BASE_URL + 'getRoomsDetails', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);
export const handleBasicRoomDetails = createAsyncThunk(
  'Rooms/handleBasicRoomDetails',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;

    const response = await axios.get(BASE_URL + 'getBasicRoomDetails', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);
export const createRoomThunkAPI = createAsyncThunk(
  'Rooms/createRoom',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    console.log('data', data, token);
    const response = await axios.post(BASE_URL + 'createRoom', data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const deleteRoomThunkAPI = createAsyncThunk(
  'Rooms/deleteRoom',
  async (roomId, {getState}) => {
    const {token} = getState().root.auth.userData;
    console.log('data', roomId, token);
    const response = await axios.delete(BASE_URL + 'deleteRoom/'+roomId, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

export const updateRoomThunkAPI = createAsyncThunk(
  'Rooms/updateRoom',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    console.log('data', data, token);
    const response = await axios.put(BASE_URL + 'updateRoom/'+data.roomNo, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  },
);

const getAllRoomsSlice = createSlice({
  name: 'allRooms',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleRoomsListAPI.pending, state => {
        state.roomsListResponse.loading = true;
      })
      .addCase(handleRoomsListAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.roomsListResponse.loading = false;
        state.roomsListResponse.response = action?.payload?.data;
      })
      .addCase(handleRoomsListAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.roomsListResponse.loading = false;
        // state.roomsListResponse.error = action?.error?.message;
        state = {...state, roomsListResponse: INITIAL_STATE.roomsListResponse};
      })
      .addCase(handleBasicRoomDetails.pending, state => {
        state.roomsBasicDataResponse.loading = true;
      })
      .addCase(handleBasicRoomDetails.fulfilled, (state, action) => {
        console.log('action', action);
        state.roomsBasicDataResponse.loading = false;
        state.roomsBasicDataResponse.response = action?.payload?.data;
      })
      .addCase(handleBasicRoomDetails.rejected, (state, action) => {
        console.log('action Rejected', action);
        // state.roomsBasicDataResponse.error = action?.error?.message;
        state = {
          ...state,
          roomsBasicDataResponse: INITIAL_STATE.roomsBasicDataResponse,
        };
      })
      .addCase(createRoomThunkAPI.pending, state => {
        state.createRoomDataResponse.loading = true;
      })
      .addCase(createRoomThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.createRoomDataResponse.loading = false;
        state.createRoomDataResponse.response = action?.payload?.data;
      })
      .addCase(createRoomThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        // state.createRoomDataResponse.error = action?.error?.message;
        state = {
          ...state,
          createRoomDataResponse: INITIAL_STATE.createRoomDataResponse,
        };
      })
      .addCase(deleteRoomThunkAPI.pending, state => {
        state.deleteRoomResponse.loading = true;
      })
      .addCase(deleteRoomThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.deleteRoomResponse.loading = false;
        state.deleteRoomResponse.response = action?.payload?.data;
      })
      .addCase(deleteRoomThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        // state.deleteRoomResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteRoomResponse: INITIAL_STATE.deleteRoomResponse,
        };
      })
      .addCase(updateRoomThunkAPI.pending, state => {
        state.updateRoomResponse.loading = true;
      })
      .addCase(updateRoomThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.updateRoomResponse.loading = false;
        state.updateRoomResponse.response = action?.payload?.data;
      })
      .addCase(updateRoomThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        // state.updateRoomResponse.error = action?.error?.message;
        state = {
          ...state,
          updateRoomResponse: INITIAL_STATE.updateRoomResponse,
        };
      });
  },
});

export default getAllRoomsSlice.reducer;
