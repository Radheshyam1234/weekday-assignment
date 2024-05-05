import { fetchJobs } from "./store/api/fetchJobs";
import { useEffect } from "react";
import Filters from "./components/filters/filters";
import JobsListing from "./components/jobs-listing/jobs-listing";
import { setJobs, setJobsFetchingStatus } from "./store/actions/job-action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/common/loader/loader";

import "./App.css";
import { useHome } from "./hooks/use-home";

function App() {
  const { fetchingStatus } = useHome();
  return (
    <div className="App">
      <Filters />
      {fetchingStatus === "fetching" ? <Loader /> : <JobsListing />}
    </div>
  );
}

export default App;
