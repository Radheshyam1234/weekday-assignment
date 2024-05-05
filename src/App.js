import "./App.css";
import { fetchJobs } from "./store/api/fetchJobs";
import { useEffect } from "react";
import Filters from "./components/filters/filters";

function App() {
  useEffect(() => {
    fetchJobs(30).then((data) => console.log("jobs", data));
  }, []);
  return (
    <div className="App">
      <Filters />
    </div>
  );
}

export default App;
