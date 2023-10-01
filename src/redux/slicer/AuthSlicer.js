import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import { db } from "../../firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from "@react-native-firebase/storage";
import { AppRegistry } from "react-native";

const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    try {
      // console.log(email, password);
      const user = await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("success");
        });
      // let userData = await db
      //   .collection("users")
      //   .where("userId", "==", user?.user?.uid)
      //   .get();
      // let data = {};
      // userData.forEach((doc) => {
      //   data = { docId: doc.id, ...doc.data() };
      //   console.log(data);
      // });
      // console.log('Congrats You are logged in', email);
      // return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // thunkAPI.dispatch(setMessage(message));
      console.log(message);
    }
  }
);

const loginWithMobile = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    try {
      // console.log(email, password);
      const user = await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("success");
        });
      // let userData = await db
      //   .collection("users")
      //   .where("userId", "==", user?.user?.uid)
      //   .get();
      // let data = {};
      // userData.forEach((doc) => {
      //   data = { docId: doc.id, ...doc.data() };
      //   console.log(data);
      // });
      // console.log('Congrats You are logged in', email);
      // return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // thunkAPI.dispatch(setMessage(message));
      console.log(message);
    }
  }
);


const collectionRef = db.collection("users");

const signUpUser = createAsyncThunk(
  "users/signUpUser",
  async (userDetails, {}) => {
    console.log("SignUp Function", userDetails);
    const {
      email,
      password,
      firstName,
      lastName,
      mobile,
      country,
      countryCode,
      gender,
      age,
      username,
      imagePath,
    } = userDetails;
    try {
      await auth()
        // Create a new user
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Save UserDetails in DataBase
          let userData = {
            uid: user.uid,
            email: user.email,
            firstname: firstName,
            lastname: lastName,
            mobile: mobile,
            country: country,
            countryCode: countryCode,
            gender: gender,
            age: age,
            username: username,
            createdAt: new Date(),
          };
          collectionRef
            .doc(user.uid)
            .set(userData)
            .then(() => {
              console.log("UserProfileData Added successfully", userData);
            })
            .then(() => {
              // const reference = storage().ref('/images/t-shirts/black-t-shirt-sm.png');
              //     const uploadImage = async () => {
              //       const fileName = imagePath.substring(
              //         imagePath.lastIndexOf("/") + 1
              //       );
              //       console.log("UPLOAD IMAGE>>", fileName);
              //       const uploadUri =
              //         Platform.OS === "ios"
              //           ? imagePath.replace("file://", "")
              //           : imagePath;
              //       console.log("UPLOAD URI>>", uploadUri);
              //       // setUploading(true);
              //       // setTransferred(0);
              //        // path to existing file on filesystem
              // const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
              // // uploads file
              // await reference.putFile(pathToFile);
              //       const task = storage().ref(fileName).putFile(uploadUri);
              //       // task.on("state_changed", (snapshot) => {
              //       //   setTransferred(
              //       //     Math.round(
              //       //       snapshot.bytesTransferred / snapshot.totalBytes
              //       //     ) * 10000
              //       //   );
              //       // });
              //       try {
              //         await task;
              //       } catch (e) {
              //         console.error(e);
              //       }
              //       // setUploading(false);
              //       Alert.alert(
              //         "Photo uploaded!",
              //         "Your photo has been uploaded to Firebase Cloud Storage!"
              //       );
              //       // setImage(null);
              //     };
              //     uploadImage();
              // const fileName = imagePath.substring(
              //   imagePath.lastIndexOf("/") + 1
              // );
              // const task = storage
              //   .ref(`/images/${user.uid}` + fileName)
              //   .putFile(imagePath);
              // task.on("state_changed", (taskSnapshot) => {
              //   console.log(
              //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
              //   );
              // });
              // task.then(() => {
              //   console.log("Image uploaded to the bucket!");
              // });
              // const url = storage()
              //   .ref("images/profile-1.png")
              //   .getDownloadURL();
              // console.log(`Image uploaded to ${url}`);
              // console.log("FileName Added successfully", fileName);
              // const reference = storage().ref(fileName).putFile(imagePath);
              // console.log("Reference Added successfully", reference);
            })
            .catch((err) => {
              console.log("Error adding user", err);
            });
        });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }
    }
  }
);

const checkUser = createAsyncThunk("users/checkUser", async (navigation) => {
  try {
    const user = auth().currentUser;
    // console.log(user);

    if (!user) {
      navigation.navigate("SignInScreen");
      return;
    }
    // console.log('user', user);
    let userData = await db
      .collection("users")
      .where("userId", "==", user?.user?.uid)
      .get();
    let data = {};
    userData.forEach((doc) => {
      data = { docId: doc.id, ...doc.data() };
    });

    return { user: data };
  } catch (error) {
    navigation.navigate("SignInScreen");
    console.log(error);
  }
});

const signOut = createAsyncThunk("users/signOut", async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log("What Went Wrong ", error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLogin: AsyncStorage.getItem("isLogin").then() === "ture" ? true : false,
    token: null,
    isloading: false,
    userData: {},
    userDetailData: {},
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      AsyncStorage.setItem(JSON.stringify("isLogin", action.payload));
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserDetailData: (state, action) => {
      console.log("setUserDetailData", action);
      state.userDetailData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log('do login action', action);

      state.user = action.payload;
      state.isLogin = true;
      state.isloading = false;
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.isloading = false;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.isloading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isloading = false;
    });
    builder.addCase(signOut.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      console.log("signOut Successfull", action);

      state.user = null;
      state.isLogin = false;
      state.isloading = false;
      AsyncStorage.setItem("isLogin", action.payload);
    });
    builder.addCase(signOut.rejected, (state, action) => {
      console.log("LogOut Rejected", action);
      state.isloading = false;
    });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(checkUser.rejected, (state, action) => {
      state.user = null;
      state.isLogin = false;
    });
  },
});

export { loginUser, signOut, checkUser, signUpUser };
export default authSlice.reducer;

// export const selectIsLogin = state => state.auth.isLogin;
// export const selectUser = state => state.auth.user;
// export const selectUserData = state => state.auth.userData;
// export const selectNewUser = state => state.auth.newUser;
// export const selectCurrentUser = state => state.auth.currentUser;
// export const selectUserDetailData = state => state.auth.userDetailData;

export const { setIsLogin, setUserData, setUserDetailData } = authSlice.actions;

// Upload an image to firebase Storage
