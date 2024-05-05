import Select from "react-select";
import { ExperienceConstants } from "../../../../constants/filter-constants";
import { setFilters } from "../../../../store/actions/filter-action";
import { useDispatch } from "react-redux";

const ExperienceFilter = () => {
  const dispatch = useDispatch();
  const handleExperienceChange = (e) => {
    const selectedExperience = e?.value;
    dispatch(setFilters({ experience: selectedExperience ?? 0 }));
  };
  return (
    <div>
      <Select
        placeholder="Experience"
        isClearable
        options={ExperienceConstants}
        onChange={handleExperienceChange}
      />
    </div>
  );
};

export default ExperienceFilter;
