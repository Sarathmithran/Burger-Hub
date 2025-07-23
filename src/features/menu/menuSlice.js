import { createSlice } from '@reduxjs/toolkit';
import { fetchMenus } from './menuThunk';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
    error: null
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
      });
  }
});

export default menuSlice.reducer;