import Filters from "./components/filters/filters";
import JobsListing from "./components/jobs-listing/jobs-listing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Filters />
      <JobsListing />
    </div>
  );
}

export default App;
