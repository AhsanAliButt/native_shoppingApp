import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import validators from "../../ultis/Validator";
import { useState, useContext } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import useSignIn from "./useAuth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./SignInStyle";

const SignInScreen = ({ navigation }) => {
  const { loginHandler } = useSignIn();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    name: "",
    profileImage: "",
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

  const textInputChange = (val) => {
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

  const handlePasswordChange = (val) => {
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

  const handleValidEmail = (val) => {
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

  const handleValidPassword = (val) => {
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

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View
        style={{
          width: 60,
          alignItems: "flex-end",
          display: "flex",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="closesquare"
            size={30}
            color="#fff"
            style={{ borderRadius: 50, padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}> Email </Text>
      </Animatable.View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;
