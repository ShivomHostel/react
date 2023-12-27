import {createSlice} from '@reduxjs/toolkit';
import {
  createExpensesCategoryThunkAPI,
  deleteExpenseCategoryThunkAPI,
  expenseAddCategoryItemThunkAPI,
  expenseCategoryItemThunkAPI,
  expenseDeleteCategoryItemThunkAPI,
  expenseUpdateCategoryItemThunkAPI,
  handleExpensesDetailseThunkAPI,
  updateExpenseCategoryThunkAPI,
} from '../api/thunks';

const INITIAL_STATE = {
  expensesListResponse: {
    response: [],
    loading: false,
  },
  deleteExpenseCategoryResponse: {
    response: [],
    loading: false,
  },
  createExpensesCategoryResponse: {
    response: [],
    loading: false,
  },
  updateExpenseCategoryResponse: {
    response: [],
    loading: false,
  },
  expenseCategoryItemResponse: {
    response: [],
    loading: false,
  },
  expenseAddCategoryItemResponse: {
    response: [],
    loading: false,
  },
  expenseUpdateCategoryItemResponse: {
    response: [],
    loading: false,
  },
  expenseDeleteCategoryItemResponse: {
    response: [],
    loading: false,
  },
};

const expensesSlice = createSlice({
  name: 'Expenses',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(handleExpensesDetailseThunkAPI.pending, state => {
        state.expensesListResponse.loading = true;
      })
      .addCase(handleExpensesDetailseThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.expensesListResponse.loading = false;
        state.expensesListResponse.response = action?.payload?.data;
      })
      .addCase(handleExpensesDetailseThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.expensesListResponse.loading = false;
        state.expensesListResponse.error = action?.error?.message;
        state = {
          ...state,
          expensesListResponse: INITIAL_STATE.expensesListResponse,
        };
      })
      .addCase(deleteExpenseCategoryThunkAPI.pending, state => {
        state.deleteExpenseCategoryResponse.loading = true;
      })
      .addCase(deleteExpenseCategoryThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.deleteExpenseCategoryResponse.loading = false;
        state.deleteExpenseCategoryResponse.response = action?.payload?.data;
      })
      .addCase(deleteExpenseCategoryThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.deleteExpenseCategoryResponse.loading = false;
        state.deleteExpenseCategoryResponse.error = action?.error?.message;
        state = {
          ...state,
          deleteExpenseCategoryResponse:
            INITIAL_STATE.deleteExpenseCategoryResponse,
        };
      })
      .addCase(createExpensesCategoryThunkAPI.pending, state => {
        state.createExpensesCategoryResponse.loading = true;
      })
      .addCase(createExpensesCategoryThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.createExpensesCategoryResponse.loading = false;
        state.createExpensesCategoryResponse.response = action?.payload?.data;
      })
      .addCase(createExpensesCategoryThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.createExpensesCategoryResponse.loading = false;
        state.createExpensesCategoryResponse.error = action?.error?.message;
        state = {
          ...state,
          createExpensesCategoryResponse:
            INITIAL_STATE.createExpensesCategoryResponse,
        };
      })
      .addCase(updateExpenseCategoryThunkAPI.pending, state => {
        state.updateExpenseCategoryResponse.loading = true;
      })
      .addCase(updateExpenseCategoryThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.updateExpenseCategoryResponse.loading = false;
        state.updateExpenseCategoryResponse.response = action?.payload?.data;
      })
      .addCase(updateExpenseCategoryThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.updateExpenseCategoryResponse.loading = false;
        state.updateExpenseCategoryResponse.error = action?.error?.message;
        state = {
          ...state,
          updateExpenseCategoryResponse:
            INITIAL_STATE.updateExpenseCategoryResponse,
        };
      })
      .addCase(expenseCategoryItemThunkAPI.pending, state => {
        state.expenseCategoryItemResponse.loading = true;
      })
      .addCase(expenseCategoryItemThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.expenseCategoryItemResponse.loading = false;
        state.expenseCategoryItemResponse.response = action?.payload?.data;
      })
      .addCase(expenseCategoryItemThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.expenseCategoryItemResponse.loading = false;
        state.expenseCategoryItemResponse.error = action?.error?.message;
        state = {
          ...state,
          expenseCategoryItemResponse:
            INITIAL_STATE.expenseCategoryItemResponse,
        };
      })
      .addCase(expenseAddCategoryItemThunkAPI.pending, state => {
        state.expenseAddCategoryItemResponse.loading = true;
      })
      .addCase(expenseAddCategoryItemThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.expenseAddCategoryItemResponse.loading = false;
        state.expenseAddCategoryItemResponse.response = action?.payload?.data;
      })
      .addCase(expenseAddCategoryItemThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.expenseAddCategoryItemResponse.loading = false;
        state.expenseAddCategoryItemResponse.error = action?.error?.message;
        state = {
          ...state,
          expenseAddCategoryItemResponse:
            INITIAL_STATE.expenseAddCategoryItemResponse,
        };
      })
      .addCase(expenseDeleteCategoryItemThunkAPI.pending, state => {
        state.expenseDeleteCategoryItemResponse.loading = true;
      })
      .addCase(expenseDeleteCategoryItemThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.expenseDeleteCategoryItemResponse.loading = false;
        state.expenseDeleteCategoryItemResponse.response =
          action?.payload?.data;
      })
      .addCase(expenseDeleteCategoryItemThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.expenseDeleteCategoryItemResponse.loading = false;
        state.expenseDeleteCategoryItemResponse.error = action?.error?.message;
        state = {
          ...state,
          expenseDeleteCategoryItemResponse:
            INITIAL_STATE.expenseDeleteCategoryItemResponse,
        };
      })
      .addCase(expenseUpdateCategoryItemThunkAPI.pending, state => {
        state.expenseUpdateCategoryItemResponse.loading = true;
      })
      .addCase(expenseUpdateCategoryItemThunkAPI.fulfilled, (state, action) => {
        console.log('action', action);
        state.expenseUpdateCategoryItemResponse.loading = false;
        state.expenseUpdateCategoryItemResponse.response =
          action?.payload?.data;
      })
      .addCase(expenseUpdateCategoryItemThunkAPI.rejected, (state, action) => {
        console.log('action Rejected', action);
        state.expenseUpdateCategoryItemResponse.loading = false;
        state.expenseUpdateCategoryItemResponse.error = action?.error?.message;
        state = {
          ...state,
          expenseUpdateCategoryItemResponse:
            INITIAL_STATE.expenseUpdateCategoryItemResponse,
        };
      });
  },
});

export default expensesSlice.reducer;
