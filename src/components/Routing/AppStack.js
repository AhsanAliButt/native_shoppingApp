import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/settings';
import ProfileScreen from '../screens/profile/profileScreen';
import MessagesScreen from '../screens/messages/message';
import EmailScreen from '../screens/email/emailScreen';
import CustomDrawer from '../ultis/customDrawer';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => {
            <Ionicons name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => {
            <Ionicons name="person-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          drawerIcon: color => {
            <Ionicons
              name="chatbox-ellipses-outline"
              size={22}
              color={color}
            />;
          },
        }}
      />
      <Drawer.Screen
        name="EmailScreen"
        component={EmailScreen}
        options={{
          drawerIcon: color => {
            <Ionicons name="timer-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          drawerIcon: color => {
            <Ionicons name="settings-outline" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
