const signUpUser = createAsyncThunk(
  'users/signUpUser',
  async (userDetails, {}) => {
    console.log('SignUp Function', userDetails);
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
    } = userDetails;
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log('USER CREDENTIAL >>>', user);
          createUserProfile(user);
          console.log('User account created & signed in!');
        });
      const createUserProfile = user => {
        return console.log('USER CREDENTIAL >>>', user);
      };
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    }
  },
);
