import JobCard from "./components/job-card/job-card";
import "./jobs-listing.css";
import { useSelector } from "react-redux";
import Loader from "../common/loader/loader";
import { useJobListing } from "../../hooks/use-job-listing";
import { useFilteredJobs } from "../../hooks/use-filtered-jobs";

const JobsListing = () => {
  const { fetchingStatus } = useSelector((state) => state.jobs);
  const { targetRef } = useJobListing();
  const { filteredJobs } = useFilteredJobs();

  return (
    <div>
      <div className="jobs-container">
        {filteredJobs?.length > 0 ? (
          filteredJobs?.map((data) => <JobCard data={data} />)
        ) : (
          <>
            {fetchingStatus === "idle" && (
              <div className="no-jobs-container">
                <p className="no-jobs-container_text">
                  No Jobs available for this category at the moment
                </p>
              </div>
            )}
          </>
        )}
      </div>
      {fetchingStatus === "fetching" ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        ""
      )}
      <div style={{ height: "100px" }} ref={targetRef}></div>
    </div>
  );
};

export default JobsListing;
