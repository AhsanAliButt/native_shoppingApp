// import { LogBox, SafeAreaView } from "react-native";
// import React, { useEffect } from "react";
// import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
// import { Provider, useSelector } from "react-redux";
// import store from "./src/redux/store/store";
// import AuthStack from "./src/components/Routing/AuthStack";
// import { NavigationContainer } from "@react-navigation/native";
// import { setIsLogin, setUserData } from "./src/redux/slicer/AuthSlicer";
// import { useDispatch } from "react-redux";
// import { Platform, ViewPropTypes } from "react-native";
// import { db } from "./src/firebase/firebase";
// // import {NavigationContainer} from '@react-navigation/native';

// LogBox.ignoreLogs([
//   "ViewPropTypes will be removed",
//   "ColorPropType will be removed",
// ]);

// const App = () => {
//   const user = useSelector((state) => state.auth.user); // get user from store
//   const userData = useSelector((state) => state.auth.userData); // get user from store
//   console.log("user Data App.js", userData?._data?.age);
//   const dispatch = useDispatch(); // useDispatch hook
//   useEffect(() => {
//     auth().onAuthStateChanged(async (user) => {
//       console.log("auth state changed", user);
//       if (user) {
//         console.log("user28", user.uid);

//         const userData = await db.collection("users").doc(user.uid).get();
//         console.log("RESPONSEEEEEEEEEEEEEEEEEEEEEEE", response);
//         dispatch(setIsLogin(true));
//         dispatch(setUserData(userData));
//       } else {
//         dispatch(setIsLogin(false));
//         dispatch(setUserData({}));
//       }
//     });
//   }, []);

//   // const getData = async (user) => {
//   //   console.log("auth state changed", user);
//   //   if (user) {
//   //     console.log("user28", user.uid);

//   //     const userData = await db.collection("users").doc(user.uid).get();
//   //     console.log("RESPONSEEEEEEEEEEEEEEEEEEEEEEE", response);
//   //     dispatch(setIsLogin(true));
//   //     dispatch(setUserData(userData));
//   //   } else {
//   //     dispatch(setIsLogin(false));
//   //     dispatch(setUserData({}));
//   //   }
//   // };
//   return (
//     <>
//       {/* <NavigationContainer> */}
//       <AuthStack />
//       {/* <UserDetails />
//       </NavigationContainer> */}
//     </>
//   );
// };

// export default () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };
