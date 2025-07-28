import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { addItem, fetchCart, removeItem } from './cartAPI';

// Fetch cart items
export const getCart = createAsyncThunk('cart/fetchCart', async (_, thunkAPI) => {
  try {
    const response = await fetchCart();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add item to cart
export const addToCart = createAsyncThunk('cart/addItem', async (payload, thunkAPI) => {
  try {
    const response = await addItem(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
        status: error.response?.status,
        message: error.response?.data?.message || 'Something went wrong',
    });
  }
});

// Remove item to cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (payload, thunkAPI) => {
  try {
    const response = await removeItem(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
        status: error.response?.status,
        message: error.response?.data?.message || 'Something went wrong',
    });
  }
});