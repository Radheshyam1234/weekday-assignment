const filtersInitialState = {
  role: [],
  experience: 0,
  techStack: [],
  numOfEmployees: "",
  location: "",
  minSalary: 0,
  searchCompanyText: "",
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
