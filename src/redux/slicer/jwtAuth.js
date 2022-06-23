import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  searchTicketList: [],
  user: null,
};

const authSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken} = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setCredentials, setIsLoading, logOut} = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
