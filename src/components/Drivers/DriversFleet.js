import { useSelector } from "react-redux";
import DriverProfile from "./DriverProfile";

import "./DriversFleet.css";

const DriversFleet = () => {
  const searchMode = useSelector((state) => state.driversList.search);
  const driversList = useSelector((state) => {
    return searchMode
      ? state.driversList.filteredDrivers
      : state.driversList.items;
  });

  return (
    <div className="drivers_fleet_container">
      {console.log(driversList)}
      {driversList.map((driver) => (
        <DriverProfile
          key={driver.id}
          driver={{
            id: driver.id,
            rank: driver.driverRank,
            name: driver.name,
            phone: driver.phone,
            email: driver.email,
            driverType: driver.driverType,
            profile_image: !driver.profile_image 
            ? "https://bitsofco.de/content/images/2018/12/broken-1.png"
            : driver.profile_image,
          }}
        /> 
      ))}
    </div>
  );
};

export default DriversFleet;
