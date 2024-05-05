import React from "react";
import RolesFilter from "./components/roles-filter/roles-filter";
import ExperienceFilter from "./components/experience-filter/experience-filter";
import LocationsFilter from "./components/locations-filter/location-filter";
import MinSalaryFilter from "./components/salary-filter/min-salary-filter";
import "./filters.css";
import SearchCompany from "./components/company-search/search-company";

const Filters = () => {
  return (
    <div className="job-filters-container">
      <RolesFilter />
      <ExperienceFilter />
      <LocationsFilter />
      <MinSalaryFilter />
      <SearchCompany />
    </div>
  );
};

export default Filters;
