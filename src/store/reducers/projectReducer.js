const initState = {
  projects: [
    { id: 1, title: "help me find peach", content: "bfwd dfdfw fwec" },
    { id: 2, title: "collect all stars", content: "ekfbew kddd djjn" },
    { id: 3, title: "egg hunt with yoshi", content: "fewfw dwqd dwqdq" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.payload);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
