import logo from "./logo.svg";
import "./App.css";
import { fetchJobs } from "./store/api/fetchJobs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchJobs().then((data) => console.log("jobs", data));
  }, []);
  return <div className="App">Weekday Assignment</div>;
}

export default App;
