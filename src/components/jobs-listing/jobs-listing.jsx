import { useSelector } from "react-redux";
import JobCard from "./components/job-card/job-card";
import "./jobs-listing.css";

const JobsListing = () => {
  const { jobs } = useSelector((state) => state.jobs);
  return (
    <div className="jobs-container">
      {jobs?.map((data) => (
        <JobCard data={data} />
      ))}
    </div>
  );
};

export default JobsListing;
