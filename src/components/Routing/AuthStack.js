import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routing from './Routing';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);

  // console.log({isLogin});

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  // const [isLogin, setIsLogin] = useState(false);

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
  // useEffect(() => {
  //   const isLoggedIn = useSelector(state => state.auth.isLogin);
  //   console.log('useEffect', isLoggedIn);
  //   if (isLoggedIn) {
  //     setIsLoading(false);
  //     setIsLogin(true);
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <NavigationContainer>
        {!isLogin ? <Routing /> : <AppStack />}
      </NavigationContainer>
    </>
  );
};

export default AuthStack;
