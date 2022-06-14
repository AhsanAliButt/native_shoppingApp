import 'react-native-gesture-handler';
import React from 'react';
import Routing from './src/components/Routing/Routing';
// import DrawerScreen from './components/screens/Drawer/DrawerScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import AuthStack from './src/components/Routing/AppStack';
// import AuthStack from './src/components/Routing/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/screens/home/HomeScreen';
import SettingsScreen from './src/components/screens/settings/settings';
import CombineStack from './src/components/Routing/CombineStack';
import CustomDrawer from './src/components/ultis/customDrawer';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import TabNavigator from './src/components/Routing/TabNavigator';
import {SafeAreaProvider} from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </Provider>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <TabNavigator />
    // </NavigationContainer>
  );
};

export default App;
