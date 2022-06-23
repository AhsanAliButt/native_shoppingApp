import React from 'react';
import Routing from './src/components/Routing/Routing';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AppStack from './src/components/Routing/AppStack';
import AuthStack from './src/components/Routing/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Routing />
      </NavigationContainer> */}
      <AuthStack />
    </Provider>
  );
};

export default App;
