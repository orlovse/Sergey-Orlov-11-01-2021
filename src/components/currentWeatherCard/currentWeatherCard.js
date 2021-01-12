import { getIcon } from "../../utils/icons";

const CurrentWeatherCard = ({ weatherIcon, temperature, currentCity }) => {
  const icon = getIcon(weatherIcon);
  return (
    <div>
      <img src={icon} alt="weather-icon"></img>
      <div>{temperature && temperature.Metric.Value}</div>
      <div>
        {currentCity.name} / {currentCity.country}
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
