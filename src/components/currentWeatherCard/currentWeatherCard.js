import { Box } from "@material-ui/core";
import styles from "./currentWeatherCard.module.css";
import { getIcon } from "../../utils/icons";
import { connect } from "react-redux";
import { fahrenheitSelector } from "../../redux/selectors";

const CurrentWeatherCard = ({
  weatherIcon,
  temperature,
  currentCity,
  isFahrenheit,
}) => {
  if (!temperature) return "Loading...";
  const currentTemperature = isFahrenheit
    ? temperature.Imperial.Value + " F"
    : temperature.Metric.Value + " \u00b0C";
  const iconSrc = getIcon(weatherIcon);
  return (
    <Box className={styles.root}>
      <div>
        <img width="180px" src={iconSrc} alt="weather-icon"></img>
      </div>

      <div className={styles.details}>
        <div>
          <h2>{currentCity.name}</h2>
          <h5>{currentCity.country} </h5>
        </div>
        <h3>{currentTemperature}</h3>
      </div>
    </Box>
  );
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(CurrentWeatherCard);
