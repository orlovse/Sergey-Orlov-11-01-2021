import { getIcon } from "../../utils/icons";

const CurrentWeatherCard = ({ weatherIcon, temperature }) => {
  const icon = getIcon(weatherIcon);
  return (
    <>
      <img src={icon} alt="weather-icon"></img>
      <div>{temperature && temperature.Metric.Value}</div>
    </>
  );
};

export default CurrentWeatherCard;
