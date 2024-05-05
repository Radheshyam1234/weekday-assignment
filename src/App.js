import "./App.css";
import { fetchJobs } from "./store/api/fetchJobs";
import { useEffect } from "react";
import Filters from "./components/filters/filters";
import JobsListing from "./components/jobs-listing/jobs-listing";

function App() {
  useEffect(() => {
    fetchJobs(30).then((data) => console.log("jobs", data));
  }, []);
  return (
    <div className="App">
      <Filters />
      <JobsListing />
    </div>
  );
}

export default App;
