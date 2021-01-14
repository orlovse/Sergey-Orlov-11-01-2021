import { connect } from "react-redux";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./currentWeatherCard.module.css";
import { getIcon } from "../../utils/icons";
import { fahrenheitSelector } from "../../redux/selectors";

const CurrentWeatherCard = ({
  weatherIcon,
  temperature,
  currentCity,
  isFahrenheit,
}) => {
  const currentTemperature = isFahrenheit
    ? get(temperature, "Imperial.Value", 0) + " F"
    : Math.round(get(temperature, "Metric.Value", 0)) + " \u00b0C";
  const iconSrc = getIcon(weatherIcon);
  const img = iconSrc ? (
    <img width="180px" src={iconSrc} alt="weather-icon"></img>
  ) : (
    <Skeleton variant="circle" width={100} height={100} />
  );
  return (
    <Box className={styles.root}>
      <div>{img}</div>

      <div className={styles.details}>
        <div>
          <h2>{currentCity.name || <Skeleton width={120} />}</h2>
          <h5>{currentCity.country || <Skeleton width={120} />} </h5>
        </div>
        <h3>{currentTemperature || <Skeleton width={60} />}</h3>
      </div>
    </Box>
  );
};

CurrentWeatherCard.propTypes = {
  weatherIcon: PropTypes.number.isRequired,
  temperature: PropTypes.object.isRequired,
  currentCity: PropTypes.object.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(CurrentWeatherCard);
