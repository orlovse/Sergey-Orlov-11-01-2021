import Card from "@material-ui/core/Card";
import { getIcon } from "../../utils/icons";

const WeatherCard = () => {
  const icon = getIcon(3);
  return (
    <>
      <div>Card</div>
      <img src={icon} alt="weather-icon"></img>
    </>
  );
};

export default WeatherCard;
