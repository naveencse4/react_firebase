export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // make async call
  const firestore = getFirestore();
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: "Net",
      authorLastName: "Vague",
      authorId: 12345,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", payload: project });
    })
    .catch((error) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", error });
    });
};
