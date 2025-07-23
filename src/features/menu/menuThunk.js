import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMenus } from './menusAPI';

export const fetchMenus = createAsyncThunk(
  'menu/fetchMenus',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getMenus(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);