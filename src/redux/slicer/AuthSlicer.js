// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   email: null,
//   token: null,
//   id: null,
// };

// const AuthSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.email = action.payload.email;
//       state.token = action.payload.token;
//       state.id = action.payload.id;
//     },
//     removeUser(state) {
//       state.email = null;
//       state.token = null;
//       state.id = null;
//     },
//   },
// });

// export const {setUser, removeUser} = AuthSlice.actions;
// export default AuthSlice.reducer;

// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async userId => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   },
// );

// const AuthSlice = createSlice({
//   name: 'userAuth',
//   initialState: {
//     user: null,
//     userData: {},
//     newUser: '',
//     currentUser: '',
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },

//     logout: state => {
//       state.user = null;
//     },
//     userData: (state, action) => {
//       state.userData = action.payload;
//     },
//     registerUser: (state, action) => {
//       state.newUser = action.payload;
//     },
//     currentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//     extraReducers: builder => {
//       builder.addCase(fetchUserById.fulfilled, (state, action) => {
//         state.users = action.payload;
//       });
//     },
//   },
// });

// export {fetchUserById};
// export default AuthSlice.reducer;

// export const selectUser = state => state.user.user;
// export const selectUserData = state => state.user.userData;
// export const selectNewUser = state => state.user.newUser;
// export const selectCurrentUser = state => state.user.currentUser;

// export const {login, logout, userData, registerUser, currentUser} =
//   AuthSlice.actions;
