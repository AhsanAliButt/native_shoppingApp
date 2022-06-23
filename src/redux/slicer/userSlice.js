import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async userId => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: null,
    userData: {},
    newUser: '',
    currentUser: '',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: state => {
      state.user = null;
    },
    userData: (state, action) => {
      state.userData = action.payload;
    },
    registerUser: (state, action) => {
      state.newUser = action.payload;
    },
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    extraReducers: builder => {
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
        state.users = action.payload;
      });
    },
  },
});

export {fetchUserById};
export default userSlice.reducer;

export const selectUser = state => state.user.user;
export const selectUserData = state => state.user.userData;
export const selectNewUser = state => state.user.newUser;
export const selectCurrentUser = state => state.user.currentUser;

export const {login, logout, userData, registerUser, currentUser} =
  userSlice.actions;

// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         email: null,
//         token: null,
//         id: null,
//         isLogin: false,
//     },
//     reducers: {
//         login: (state, action) => {
//             state.user = action.payload;
//         }
//     }, });

// export const { login, logout } = userSlice.actions;

// // selectors
// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;
