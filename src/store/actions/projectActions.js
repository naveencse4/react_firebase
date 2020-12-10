export const createProject = (project) => async (dispatch) => {
  // make async call
  dispatch({ type: "CREATE_PROJECT", payload: project });
};
