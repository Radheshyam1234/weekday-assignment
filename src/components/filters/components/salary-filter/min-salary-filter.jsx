import Select from "react-select";
import { MinSalaryConstants } from "../../../../constants/filter-constants";

const MinSalaryFilter = () => {
  const handleSalaryChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Select
        placeholder="Minimum Base Pay Salary"
        isMulti={true}
        options={MinSalaryConstants}
        onChange={handleSalaryChange}
      />
    </div>
  );
};

export default MinSalaryFilter;
