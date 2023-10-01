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
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Enter Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(val) => handleValidEmail(val.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={{ color: "red" }}>
              {" "}
              UserName must be 4 characters long{" "}
            </Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, { marginTop: 35 }]}> Password </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            onEndEditing={(val) => handleValidPassword(val.nativeEvent.text)}
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
            <Text style={{ color: "red" }}>
              {" "}
              Password must be 8 characters long{" "}
            </Text>
          </Animatable.View>
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={styles.text_signUp}>Sign Up</Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
            onPress={() => {
              navigation.navigate("CredentialsScreen");
            }}
          >
            <Text style={styles.text_signUp}> Forget Your Credentials ? </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.button,
            { borderColor: "none", borderWidth: 0, marginTop: 50 },
          ]}
        >
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandler(email, password, navigation)}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={[styles.signIn]}
            >
              <Text style={styles.textSign}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "black", textAlign: "center", fontSize: 24 }}>
            <View style={{ width: "40%", height: 10, color: "black" }}></View>
            OR
            <View></View>
          </Text>
        </View>
        <View style={[styles.button, { marginTop: 20 }]}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandler(email, password, navigation)}
          >
            <LinearGradient
              // colors={["#08d4c4", "#01ab9d"]}
              colors={["#fdfbfb", "#ebedee"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "black" }]}>
                Login with Mobile
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={[styles.button, { marginTop: 20 }]}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandler(email, password, navigation)}
          >
            <LinearGradient
              colors={["#fdfbfb", "#ebedee"]}
              style={styles.signIn}
            >
              {/* <Text style={[styles.textSign]}>Login with Google</Text> */}
              <Image
                // style={styles.tinyLogo}
                source={require("../../../../assets/google.png")}
                style={{ width: 30, height: 30 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.button,
            {
              marginTop: 20,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandler(email, password, navigation)}
          >
            <LinearGradient
              colors={["#fdfbfb", "#ebedee"]}
              style={styles.signIn}
            >
              <View
                style={{
                  marginRight: 40,
                  width: "60%",
                }}
              >
                <FontAwesome name="apple" color="black" size={32} />
              </View>
              <View
                style={{
                  position: "absolute",
                }}
              >
                <Text style={[styles.textSign, { color: "black" }]}>
                  Login with Apple ID
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;
