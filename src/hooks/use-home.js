import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setJobsFetchingStatus } from "../store/actions/job-action";
import { fetchJobs } from "../store/api/fetchJobs";

export const useHome = () => {
  const dispatch = useDispatch();
  const { fetchingStatus } = useSelector((state) => state.jobs);

  useEffect(() => {
    (async () => {
      dispatch(setJobsFetchingStatus("fetching"));
      const jobsResponse = await fetchJobs(10);
      dispatch(setJobs(jobsResponse?.jdList));
      dispatch(setJobsFetchingStatus("idle"));
    })();
  }, []);

  return { fetchingStatus };
};
