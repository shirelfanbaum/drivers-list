import { useEffect, useState } from "react";
import Card from "../UI/Card";
import citizen from "./svg/citizen.svg";
import professional from "./svg/professional.svg";
import "./DriverProfile.css";
import Tooltip from "../UI/Tooltip";
const DriverProfile = (props) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [tooltipContent, setContent] = useState("");

  const handelTooltip = () => {
    setContent(
      "Phone number: " +
        props.driver.phone +
        "\n" +
        "Email: " +
        props.driver.email
    );
  };
  useEffect(() => handelTooltip);

  return (
    <div className="driver_profile">
      <Card>
        <div
          onMouseEnter={() => setShowMoreDetails(true)}
          onMouseLeave={() => setShowMoreDetails(false)}
        >
          <div className="container">
            <img
              src={props.driver.profile_image}
              className={showMoreDetails && "cut"}
              alt=""
            />
            <img
              className="svg"
              src={
                props.driver.driverType.toLowerCase() === "professional"
                  ? professional
                  : citizen
              }
            />
          </div>
          <Tooltip content={tooltipContent} direction="bottom">
            {props.driver.name}
            <br />
            Rank: {props.driver.rank}
            {showMoreDetails && (
              <p>
                Phone number: {props.driver.phone}
                <br />
                Email: {props.driver.email}
              </p>
            )}
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default DriverProfile;
