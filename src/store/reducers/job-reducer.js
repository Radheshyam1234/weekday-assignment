const jobInitialState = [];

const jobsReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
