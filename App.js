import {LogBox} from 'react-native';
import React from 'react';
import Routing from './src/components/Routing/Routing';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AppStack from './src/components/Routing/AppStack';
import AuthStack from './src/components/Routing/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const App = () => {
  return (
    <>
      <AuthStack />
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
