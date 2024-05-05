const filtersInitialState = {
  role: "",
  experience: "",
  techStack: [],
  numOfEmployees: "",
  location: "",
  minSalary: 0,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
