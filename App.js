import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store/store';
import AuthStack from './src/components/Routing/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {setIsLogin, setUserData} from './src/redux/slicer/AuthSlicer';
import {useDispatch} from 'react-redux';
import {Platform, ViewPropTypes} from 'react-native';
import UserDetails from './src/components/screens/userDetails/userDetails';
// import {NavigationContainer} from '@react-navigation/native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const App = () => {
  const user = useSelector(state => state.auth.user); // get user from store
  console.log('user App.js', user);
  const dispatch = useDispatch(); // useDispatch hook
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setIsLogin(true));
        dispatch(setUserData(user));
      } else {
        dispatch(setIsLogin(false));
        dispatch(setUserData({}));
      }
    });
  }, []);
  return (
    <>
      {/* <NavigationContainer> */}
      <AuthStack />
      {/* <UserDetails />
      </NavigationContainer> */}
    </>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
