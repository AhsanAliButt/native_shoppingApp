import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppRegistry} from 'react-native';

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

const collectionRef = db.collection('users');

const signUpUser = createAsyncThunk(
  'users/loginUser',
  async ({email, password}) => {
    try {
      console.log('SignUp Function', user);
      console.log(email, password);
      const user = await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
          const result = db.collection('users').add({
            ...user,
            email,
            createdAt: new Date(),
          });
          console.log('Add user in Users', result);
        })
        .then(() => {
          const data = addDoc(
            collectionRef,
            'userId',
            'email',
            'name',
            'phone',
            'address',
            'city',
            'state',
            'zip',
            'country',
            'age',
            'rank',
            'job',
          );
          const localData = {...user, uid: data.id};
          return localData;
          console.log('Congrats You are logged in', localData);
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
      const messssage =
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
    isLogin: AsyncStorage.getItem('isLogin').then() === 'ture' ? true : false,
    token: null,
    loading: false,
    userData: {},
    userDetailData: {},
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      AsyncStorage.setItem(JSON.stringify('isLogin', action.payload));
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserDetailData: (state, action) => {
      console.log('setUserDetailData', action);
      state.userDetailData = action.payload;
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
      AsyncStorage.setItem('isLogin', action.payload);
    });
    builder.addCase(signOut.rejected, (state, action) => {
      console.log('LogOut Rejected', action);
    });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(checkUser.rejected, (state, action) => {
      state.user = null;
      state.isLogin = false;
    });
  },
});

export {loginUser, signOut, checkUser, signUpUser};
export default authSlice.reducer;

// export const selectIsLogin = state => state.auth.isLogin;
// export const selectUser = state => state.auth.user;
// export const selectUserData = state => state.auth.userData;
// export const selectNewUser = state => state.auth.newUser;
// export const selectCurrentUser = state => state.auth.currentUser;
// export const selectUserDetailData = state => state.auth.userDetailData;

export const {setIsLogin, setUserData, setUserDetailData} = authSlice.actions;
