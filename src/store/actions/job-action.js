export const setJobs = (jobsData) => {
  return { type: "SET_JOBS", payload: jobsData };
};

export const setJobsFetchingStatus = (status) => {
  return { type: "SET_FETCHING_STATUS", payload: status };
};
