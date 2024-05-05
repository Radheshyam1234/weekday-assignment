import Select from "react-select";
import { WorkLocationsConstants } from "../../../../constants/filter-constants";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../../store/actions/filter-action";

const LocationsFilter = () => {
  const dispatch = useDispatch();
  const handleLocationChange = (e) => {
    const selectedLocation = e?.value;
    dispatch(setFilters({ location: selectedLocation ?? "" }));
  };
  return (
    <div>
      <Select
        placeholder="Remote"
        isClearable
        options={WorkLocationsConstants}
        onChange={handleLocationChange}
      />
    </div>
  );
};

export default LocationsFilter;
