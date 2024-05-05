import Select from "react-select";
import { ExperienceConstants } from "../../../../constants/filter-constants";

const ExperienceFilter = () => {
  const handleExperienceChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Select
        placeholder="Experience"
        options={ExperienceConstants}
        onChange={handleExperienceChange}
      />
    </div>
  );
};

export default ExperienceFilter;
