import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFilteredJobs = () => {
  const filters = useSelector((state) => state.filters);
  const { jobs } = useSelector((state) => state.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    let filteredData = jobs;
    // Filter based on user-selected job-roles
    if (filters?.role?.length > 0) {
      const rolesFilterValue = filters?.role.map((item) => item.toLowerCase());
      filteredData = filteredData?.filter((item) =>
        rolesFilterValue?.includes(item.jobRole.toLowerCase())
      );
    }

    // Filter based on selected min-experience
    if (filters.minSalary) {
      filteredData = filteredData.filter((item) => {
        if (!item.minJdSalary) return filters.minSalary <= item.maxJdSalary;
        if (!item.maxJdSalary) return filters.minSalary <= item.minJdSalary;
        else
          return (
            filters.minSalary >= item.minJdSalary &&
            filters.minSalary <= item.maxJdSalary
          );
      });
    }

    // Filter based on min experience
    if (filters.experience) {
      filteredData = filteredData.filter((item) =>
        item?.minExp ? item?.minExp <= filters.experience : false
      );
    }

    // Filter based on location
    if (filters.location) {
      filteredData = filteredData.filter((item) => {
        if (filters.location === "In-office") {
          return !["remote", "hybrid"].includes(item.location.toLowerCase());
        } else {
          return item.location.toLowerCase() === filters.location.toLowerCase();
        }
      });
    }

    // Filter based on comapny search
    if (filters.searchCompanyText) {
      filteredData = filteredData.filter((item) =>
        item.companyName
          .toLowerCase()
          .includes(filters.searchCompanyText.toLowerCase())
      );
    }
    setFilteredJobs(filteredData);
  }, [filters, jobs]);

  return {
    filteredJobs,
  };
};
