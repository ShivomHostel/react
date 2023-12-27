import {createAsyncThunk} from '@reduxjs/toolkit';
import {deleteData, fetchData, postData, putData} from './apis';

// export const fetchDataThunk = createAsyncThunk(
//   'data/fetchData',
//   async (_, {getState}) => {
//     const {token} = getState().auth;
//     return await fetchData(token);
//   },
// );

// export const postDataThunk = createAsyncThunk(
//   'data/postData',
//   async (data, {getState}) => {
//     const {token} = getState().auth;
//     return await postData(token, data);
//   },
// );

export const studentRegisterThunk = createAsyncThunk(
  'Registeration/studentRegister',
  async (data, {getState}) => {
    console.log('data', data);
    const {token} = getState().root.auth.userData;
    return await postData('studentRegister', token, data);
  },
);

/* Expenses Thunks  */
export const handleExpensesDetailseThunkAPI = createAsyncThunk(
  'Expenses/expensesDetails',
  async (_, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await fetchData('expensesDetails', token);
  },
);
export const deleteExpenseCategoryThunkAPI = createAsyncThunk(
  'Expenses/deleteExpenseCategory',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await deleteData(`deleteExpenseCategory/${id}`, token);
  },
);
export const createExpensesCategoryThunkAPI = createAsyncThunk(
  'Expenses/createExpensesCategory',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await postData(`createExpensesCategory`, token, data);
  },
);
export const updateExpenseCategoryThunkAPI = createAsyncThunk(
  'Expenses/updateExpenseCategory',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await postData(`updateExpenseCategory/` + data?.category_id, token, {
      category_name: data?.category_name,
    });
  },
);

export const expenseCategoryItemThunkAPI = createAsyncThunk(
  'Expenses/expenseCategoryItem',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await fetchData('expenseCategoryItemDetails/' + id, token);
  },
);

export const expenseAddCategoryItemThunkAPI = createAsyncThunk(
  'Expenses/expenseAddCategoryItem',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await postData(`expenseAddCategoryItem`, token, data);
  },
);
export const expenseUpdateCategoryItemThunkAPI = createAsyncThunk(
  'Expenses/expenseUpdateCategoryItem',
  async (data, {getState}) => {
    console.log('data', data);
    const {token} = getState().root.auth.userData;
    return await postData(`expenseUpdateCategoryItem/` + data?.id, token, {
      category_id: data?.category_id,
      quantity: Number(data?.quantity),
      amount: Number(data?.amount),
      billdate: data?.billdate,
      itemname: data?.itemname,
      rate: Number(data?.rate),
      paymentmode: data?.paymentmode,
    });
  },
);
export const expenseDeleteCategoryItemThunkAPI = createAsyncThunk(
  'Expenses/expenseDeleteCategoryItem',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await deleteData(`expenseDeleteCategoryItem/${id}`, token);
  },
);
/*  Expenses Thunks END  */

/*  Registeration Thunks  */
export const switchRoomMainRegisterThunkAPI = createAsyncThunk(
  'Registeration/switchRoomMainRegisterThunkAPI',
  async ({id, values}, {getState}) => {
    console.log('id', id, 'data', values);
    const {token} = getState().root.auth.userData;
    return await postData(`switchRoomMainRegister/${id}`, token, values);
  },
);
export const restoreOldToMainRegisterThunkAPI = createAsyncThunk(
  'Registeration/restoreOldToMainRegisterThunkAPI',
  async (data, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await postData(`restoreOldToMainRegister`, token, data);
  },
);

export const deleteOldStudentRecordsThunkAPI = createAsyncThunk(
  'Registeration/deleteOldStudentRecordsThunkAPI',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await deleteData(`deleteOldStudentRecords/${id}`, token);
  },
);

export const deleteStudentBookingThunkAPI = createAsyncThunk(
  'Registeration/deleteStudentBookingThunkAPI',
  async (id, {getState}) => {
    const {token} = getState().root.auth.userData;
    return await deleteData(`deleteStudentBooking/${id}`, token);
  },
);

export const deleteMainRegisterThunkAPI = createAsyncThunk(
  'Registeration/deleteMainRegisterThunkAPI',
  async ({id, values}, {getState}) => {
    console.log('id', id, 'data', values);
    const {token} = getState().root.auth.userData;
    return await postData(`deleteMainRegister/${id}`, token, values);
  },
);

/*  Registeration Thunks END  */
