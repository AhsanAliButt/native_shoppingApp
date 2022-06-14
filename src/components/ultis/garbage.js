import 'react-native-gesture-handler';
import React from 'react';
import Routing from './components/Routing/Routing';
import DrawerScreen from './components/screens/Drawer/DrawerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        DrawerScreen={props => <DrawerScreen {...props} />}></Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
