import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBurgersMenus, getMenuDetails, getMenus } from './menusAPI';

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

export const fetchBurgers = createAsyncThunk(
  'menu/fetchBurgers',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getBurgersMenus(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchMenuDetails = createAsyncThunk(
  'menu/fetchMenuDetails',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getMenuDetails(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);