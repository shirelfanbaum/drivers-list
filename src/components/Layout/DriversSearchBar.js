import "./DriversSearchBar.css";
import { driversListActions } from "./../../store/driversList-slice";
import { useDispatch } from "react-redux";

const DriversSearchBar = () => {
  const dispatch = useDispatch();
  const searchBarHandler = (event) => {
    dispatch(driversListActions.filterDrivers(event.target.value));
  };

  return (
    <form action="/" method="get">
      <input
        type="text"
        id="header-search"
        placeholder="search..."
        onChange={searchBarHandler}
      />
    </form>
  );
};
export default DriversSearchBar;
