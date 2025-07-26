import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart } from "./cartThunk";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
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
      .addCase(addToCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        const item = action.payload;
        const index = state.cart.findIndex(i => i.id === item.id);
        if (index !== -1) {
          state.cart[index] = item;
        } else {
          state.cart.push(item);
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default cartSlice.reducer;