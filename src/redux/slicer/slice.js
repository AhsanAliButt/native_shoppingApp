const login = (email, password) => {
  return async dispatch => {
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      dispatch(setUser(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};
const logout = () => {
  return async dispatch => {
    try {
      await auth().signOut();
      dispatch(setUser(null));
    } catch (error) {
      console.log(error);
    }
  };
};
const register = (email, password) => {
  return async dispatch => {
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch(setUser(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};
