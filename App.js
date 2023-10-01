import { LogBox } from "react-native";
import React, { useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store/store";
import AuthStack from "./src/components/Routing/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { setIsLogin, setUserData } from "./src/redux/slicer/AuthSlicer";
import { useDispatch } from "react-redux";
import { db } from "./src/firebase/firebase";
import UserDetails from "./src/components/screens/userDetails/userDetails";
import SignInScreen from "./src/components/screens/splash/SignInScreen";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);

const App = () => {
  const user = useSelector((state) => state.auth.user); // get user from store
  const userData = useSelector((state) => state.auth.userData); // get user from store
  // console.log("user App.js24", userData);
  // console.log("user Data App.js25", userData?._data?.age);
  const dispatch = useDispatch(); // useDispatch hook
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        getUserData(user);
      } else {
        dispatch(setIsLogin(false));
        dispatch(setUserData({}));
      }
    });
  }, []);
  const getUserData = async (user) => {
    try {
      const res = await db.collection("users").doc(user.uid).get();
      if (res.exists) {
        dispatch(setIsLogin(true));
        dispatch(setUserData(res));
      } else {
        dispatch(setUserData({}));
      }
    } catch (error) {}
  };
  return (
    <>
      {/* <NavigationContainer>
        <UserDetails />
      </NavigationContainer> */}

      <AuthStack />
      {/* <SignInScreen /> */}
    </>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
