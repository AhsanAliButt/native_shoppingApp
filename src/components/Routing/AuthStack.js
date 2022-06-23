import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider} from '../auth/AuthProvider';
import Routing from './Routing';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {login, logout, selectUser} from '../../redux/slicer/userSlice';
import {isLoading, userToken} from '../../redux/slicer/userSlice';
import auth from '@react-native-firebase/auth';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const loading = () => {
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
    };
  }, [1000]);
  return (
    <NavigationContainer>
      {userToken ? <AppStack /> : <Routing />}
    </NavigationContainer>
  );
};

export default AuthStack;
