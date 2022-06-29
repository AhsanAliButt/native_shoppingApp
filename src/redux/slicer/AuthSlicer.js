import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        console.log(data);
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

const checkUser = createAsyncThunk('users/checkUser', async navigation => {
  try {
    const user = auth().currentUser;
    // console.log(user);

    if (!user) {
      navigation.navigate('SignInScreen');
      return;
    }
    // console.log('user', user);
    let userData = await db
      .collection('users')
      .where('userId', '==', user?.user?.uid)
      .get();
    let data = {};
    userData.forEach(doc => {
      data = {docId: doc.id, ...doc.data()};
    });

    return {user: data};
  } catch (error) {
    navigation.navigate('SignInScreen');
    console.log(error);
  }
});

const signOut = createAsyncThunk('users/signOut', async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('What Went Wrong ', error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLogin: AsyncStorage.getItem('isLogin') === 'ture' ? true : false,
    token: null,
    loading: false,
    userData: {},
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      AsyncStorage.setItem('isLogin', action.payload);
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log('do login action', action);

      state.user = action.payload;
      state.isLogin = true;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      console.log('signOut Successfull', action);

      state.user = null;
      state.isLogin = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      console.log('LogOut Rejected', action);
    });
  },
});

export {loginUser, signOut, checkUser};
export default authSlice.reducer;

// export const selectIsLogin = state => state.auth.isLogin;
// export const selectUser = state => state.auth.user;
// export const selectUserData = state => state.auth.userData;
// export const selectNewUser = state => state.auth.newUser;
// export const selectCurrentUser = state => state.auth.currentUser;

export const {setIsLogin, setUserData} = authSlice.actions;
