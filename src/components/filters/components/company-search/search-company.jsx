import { useDispatch } from "react-redux";
import { setFilters } from "../../../../store/actions/filter-action";
import "./search-company.css";

const SearchCompany = () => {
  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    const searchedText = e.target.value;
    dispatch(setFilters({ searchCompanyText: searchedText }));
  };
  return (
    <div>
      <input
        className="search-filter-input"
        type="text"
        placeholder="Search Company Name"
        onChange={handleSearchText}
      />
    </div>
  );
};

export default SearchCompany;
