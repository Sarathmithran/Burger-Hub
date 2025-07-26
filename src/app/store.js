import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer
  }
});
