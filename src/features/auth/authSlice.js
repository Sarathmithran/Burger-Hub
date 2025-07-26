import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, loginUser, registerUser, logoutUser } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    userName: localStorage.getItem('user') || null,
    loading: false,
    error: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token')
  },
  reducers: {
    resetAuth: (state) => {
      state.loading = false;
      state.user = null;
      state.userName = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },
  extraReducers: builder => {
    builder
      // Login
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const token = action.payload.token; 
        const name = action.payload.user.name;

        state.loading = false;
        state.user = action.payload.user;
        state.userName = name;
        state.token = token;
        state.isAuthenticated = true;

        localStorage.setItem('token', token); // store token in localStorage
        localStorage.setItem('user', name); // store user name in localStorage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Login failed';
      })

      //logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        authSlice.caseReducers.resetAuth(state); //call reducer here
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Logout failed';
      })

      // Register
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Registration failed';
      })

      // Get Current User
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.user = null;
        state.isAuthenticated = false;
      });
  }
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;