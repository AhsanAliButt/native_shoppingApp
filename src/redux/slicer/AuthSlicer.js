import {createSlice} from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isLogin: false,
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const {setUserData, setIsLogin} = AuthSlice.actions;
