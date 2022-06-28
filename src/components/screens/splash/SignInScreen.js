import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './SignInStyle';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import validators from '../../ultis/Validator';
import {useState, useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import useSignIn from './useAuth';

const SignInScreen = ({navigation}) => {
  const {loginHandler} = useSignIn();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    name: '',
    profileImage: '',
  });

  const isValidData = () => {
    const error = validators({
      email,
      password,
    });
    if (error) {
      alert(error);
      return false;
    }
    return true;
  };

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidEmail = val => {
    if (!val) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      if (val.trim.length >= 4) {
        setData({
          ...data,
          isValidEmail: true,
        });
      } else {
        setData({
          ...data,
          isValidEmail: false,
        });
      }
    }
  };

  const handleValidPassword = val => {
    if (!val) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      if (val.trim.length >= 6) {
        setData({
          ...data,
          isValidPassword: true,
        });
      } else {
        setData({
          ...data,
          isValidPassword: false,
        });
      }
    }
  };
  const email = data.email;
  const password = data.password;
  const onSignIn = () => {
    handleSignIn({email, password, navigation});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View
        style={{
          width: 60,
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="closesquare"
            size={30}
            color="#fff"
            style={{borderRadius: 50, padding: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}> Email </Text>
        <KeyboardAvoidingView>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={val => handleValidEmail(val.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{color: 'red'}}>
                {' '}
                UserName must be 4 characters long{' '}
              </Text>
            </Animatable.View>
          )}
          <Text style={[styles.text_footer, {marginTop: 35}]}> Password </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
              onEndEditing={val => handleValidPassword(val.nativeEvent.text)}
              onBlur={() => {}}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="eye-off" color="gray" size={20} />
                </Animatable.View>
              ) : (
                <Animatable.View animation="bounceIn">
                  <Feather name="eye" color="gray" size={20} />
                </Animatable.View>
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{color: 'red'}}>
                {' '}
                Password must be 8 characters long{' '}
              </Text>
            </Animatable.View>
          )}
        </KeyboardAvoidingView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={styles.text_signUp}>Sign Up</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              navigation.navigate('CredentialsScreen');
            }}>
            <Text style={styles.text_signUp}> Forget Your Credentials ? </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, {marginTop: 50}]}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandler(email, password, navigation)}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
