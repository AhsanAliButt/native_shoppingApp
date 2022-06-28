import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../firebase/firebase';

const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({email, password}) => {
    try {
      // console.log(email, password);
      const user = await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
        });
      let userData = await db
        .collection('users')
        .where('userId', '==', user?.user?.uid)
        .get();
      let data = {};
      userData.forEach(doc => {
        data = {docId: doc.id, ...doc.data()};
      });
      // console.log('Congrats You are logged in', email);
      return {user: data};
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // thunkAPI.dispatch(setMessage(message));
      console.log(message);
    }
  },
);

const logoutUser = createAsyncThunk('users/logoutUser', async () => {
  try {
    console.log(' Action Now logout');
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLogin: false,
    token: null,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log('do login action', action);

      state.user = action.payload;
      state.isLogin = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      console.log('do logout action Reducer', action);

      state.user = null;
      state.isLogin = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      console.log('do logout action Reducer', action);
      state.error = action.error;
    });
  },
});

export {loginUser};
export default authSlice.reducer;

// export const selectIsLogin = state => state.auth.isLogin;
// export const selectUser = state => state.auth.user;
// export const selectUserData = state => state.auth.userData;
// export const selectNewUser = state => state.auth.newUser;
// export const selectCurrentUser = state => state.auth.currentUser;

export const {login, logout, userData, registerUser, currentUser, isLogin} =
  authSlice.actions;
