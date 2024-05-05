import { combineReducers } from "redux";
import jobsReducer from "./job-reducer";
import filtersReducer from "./filter-reducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filtersReducer,
});
export default rootReducer;
