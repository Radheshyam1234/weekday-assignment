const jobInitialState = {
  jobs: [],
  fetchingStatus: "idle",
};

const jobsReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "SET_FETCHING_STATUS":
      return { ...state, fetchingStatus: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
