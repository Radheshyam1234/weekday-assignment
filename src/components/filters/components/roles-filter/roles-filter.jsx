import Select from "react-select";
import { RolesConstants } from "../../../../constants/filter-constants";
import { setFilters } from "../../../../store/actions/filter-action";
import { useDispatch } from "react-redux";

const RolesFilter = () => {
  const dispatch = useDispatch();

  const handleRoleChange = (e) => {
    const selectedRolesArray = e?.map((item) => item?.value);
    dispatch(setFilters({ role: selectedRolesArray ?? [] }));
  };
  return (
    <div>
      <Select
        placeholder="Select Roles"
        isClearable
        isMulti={true}
        options={RolesConstants}
        onChange={handleRoleChange}
      />
    </div>
  );
};

export default RolesFilter;
