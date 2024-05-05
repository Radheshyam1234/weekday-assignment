import Select from "react-select";
import { MinSalaryConstants } from "../../../../constants/filter-constants";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../../store/actions/filter-action";

const MinSalaryFilter = () => {
  const dispatch = useDispatch();
  const handleSalaryChange = (e) => {
    const selectedMinSalary = e?.value;
    dispatch(setFilters({ minSalary: selectedMinSalary ?? 0 }));
  };
  return (
    <div>
      <Select
        placeholder="Minimum Base Pay Salary"
        isClearable
        options={MinSalaryConstants}
        onChange={handleSalaryChange}
      />
    </div>
  );
};

export default MinSalaryFilter;
