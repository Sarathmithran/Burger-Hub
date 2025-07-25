import { createSlice } from '@reduxjs/toolkit';
import { fetchBurgers, fetchMenuDetails, fetchMenus } from './menuThunk';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    burgers: {
      items: [],
      status: 'idle',
      error: null,
    },
    menuDetails: {
      item: [],
      status: 'idle',
      error: null,
    },
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenus.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Something went wrong';
      })

      //fetching burgers menu
      .addCase(fetchBurgers.pending, state => {
        state.burgers.status = 'loading';
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.burgers.status = 'succeeded';
        state.burgers.items = action.payload;
      })
      .addCase(fetchBurgers.rejected, (state, action) => {
        state.burgers.status = 'failed';
        state.burgers.error = action.error?.message || 'Something went wrong';
      })

      //fetching menu details
      .addCase(fetchMenuDetails.pending, state => {
        state.menuDetails.status = 'loading';
      })
      .addCase(fetchMenuDetails.fulfilled, (state, action) => {
        state.menuDetails.status = 'succeeded';
        state.menuDetails.item = action.payload;
      })
      .addCase(fetchMenuDetails.rejected, (state, action) => {
        state.menuDetails.status = 'failed';
        state.menuDetails.error = action.error?.message || 'Something went wrong';
      });
  }
});

export default menuSlice.reducer;