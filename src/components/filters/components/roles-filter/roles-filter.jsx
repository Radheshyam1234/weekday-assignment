import Select from "react-select";
import { RolesConstants } from "../../../../constants/filter-constants";

const RolesFilter = () => {
  const handleRoleChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Select
        placeholder="Roles"
        isMulti={true}
        options={RolesConstants}
        onChange={handleRoleChange}
      />
    </div>
  );
};

export default RolesFilter;
