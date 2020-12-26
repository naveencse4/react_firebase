export const signIn = (credentials) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch({ type: "LOGIN_SUCCESS" });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", err });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    dispatch({ type: "SIGNOUT_SUCCESS" });
  } catch (err) {}
};
