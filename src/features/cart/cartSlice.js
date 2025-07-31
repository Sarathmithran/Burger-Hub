import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart, removeFromCart } from "./cartThunk";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetCart: (state) => {
      state.cart = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      // Handle getCart
      .addCase(getCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle addToCart
      .addCase(addToCart.pending, state => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      })

      // Handle removeFromCart
      .addCase(removeFromCart.pending, state => {
        state.loading = true;
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeFromCart.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;