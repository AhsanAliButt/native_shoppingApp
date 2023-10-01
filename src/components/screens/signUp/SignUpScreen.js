import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import TextInputWithLabel from '../../textInput/TextInputWithLabel';
import * as Animatable from 'react-native-animatable';
import validators from '../../ultis/Validator';
import {useState} from 'react';
import useSignIn from '../../screens/splash/useAuth';

const SignUpScreen = ({navigation}) => {
  const {registerHandler} = useSignIn();
  // const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });
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
    if (val.trim().length >= 8) {
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
  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: false,
      });
    }
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
      if (val.trim.length >= 8) {
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

  const handleConfirmValidPassword = val => {
    if (!val) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      if (val.trim.length >= 8) {
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const handleUsername = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false,
      });
    }
  };

  const email = data.email;
  const password = data.password;
  const name = data.username;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}> SignUp for More Services !</Text>
      </View>
      {/* <KeyboardAvoidingView> */}
        <ScrollView>
          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.text_footer}> Username </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handleUsername(val)}
              />
            </View>
            <Text style={[styles.text_footer, {marginTop: 35}]}> Email </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            <Text style={[styles.text_footer, {marginTop: 35}]}>
              {' '}
              Password{' '}
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handlePasswordChange(val)}
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
            <Text style={[styles.text_footer, {marginTop: 35}]}>
              {' '}
              Confirm Password{' '}
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
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
            <View style={[styles.button, {marginTop: 50}]}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => registerHandler(data)}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signIn}>
                  <Text style={styles.textSign}> Register </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default SignUpScreen;
