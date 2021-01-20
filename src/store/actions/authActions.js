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

export const signUp = (newUser) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res) => {
      return firestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
        });
    })
    .then(() => {
      dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "SIGNUP_ERROR", err });
    });
};
