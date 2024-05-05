import JobCard from "./components/job-card/job-card";
import "./jobs-listing.css";

const JobsListing = () => {
  return (
    <div className="jobs-container">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

export default JobsListing;
