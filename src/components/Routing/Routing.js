import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import LandingScreen from '../screens/landing/LandingScreen';
import SignInScreen from '../screens/splash/SignInScreen';
import HomeScreen from '../screens/home/HomeScreen';
import SignUpScreen from '../screens/signUp/SignUpScreen';
import CredentialsScreen from '../screens/forgetcredentials/CredentialsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider} from '../auth/AuthProvider';
import CartScreen from '../screens/cart/Cart';
import ProductDetails from '../screens/productDetails/productDetails';
import ProfileScreen from '../screens/profile/profileScreen';
import EmailScreen from '../screens/email/emailScreen';
import MessagesScreen from '../screens/messages/message';
import SeeAll from '../screens/seeAll/seeAll';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Routing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text
          style={{
            fontSize: 16,
            color: 'red',
            textAlign: 'center',
            marginTop: 20,
            fontFamily: 'Roboto-Medium',
            fontWeight: 'bold',
          }}>
          {' '}
          Please Wait App is Loading{' '}
        </Text>
      </View>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'LandingScreen'}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen
        name="CredentialsScreen"
        component={CredentialsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Routing;
