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
