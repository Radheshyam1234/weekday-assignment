import { useEffect, useRef, useState } from "react";
import { fetchJobs } from "../store/api/fetchJobs";
import { setJobs, setJobsFetchingStatus } from "../store/actions/job-action";
import { useDispatch, useSelector } from "react-redux";

export const useJobListing = () => {
  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.jobs);
  const [currentPage, setCurrentPage] = useState(0);
  const targetRef = useRef(null);

  const intersectionObserver = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        threshold: 0.1,
      }
    )
  );

  const getNewPost = async (pageNumber) => {
    dispatch(setJobsFetchingStatus("fetching"));
    try {
      const jobsResponse = await fetchJobs(10, pageNumber * 10);
      if (jobsResponse?.jdList?.length > 0) {
        const updatedJobsList = [...jobs, ...(jobsResponse?.jdList ?? [])];
        dispatch(setJobs(updatedJobsList));
        intersectionObserver.current.observe(targetRef.current);
      } else {
        dispatch(setJobsFetchingStatus("idle"));
        intersectionObserver.current.unobserve(targetRef.current);
        return;
      }
      dispatch(setJobsFetchingStatus("idle"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewPost(currentPage);
  }, [currentPage]);

  return {
    targetRef,
  };
};
