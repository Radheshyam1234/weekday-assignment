import Select from "react-select";
import { WorkLocationsConstants } from "../../../../constants/filter-constants";

const LocationsFilter = () => {
  const handleLocationChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Select
        placeholder="Remote"
        isMulti={true}
        options={WorkLocationsConstants}
        onChange={handleLocationChange}
      />
    </div>
  );
};

export default LocationsFilter;
