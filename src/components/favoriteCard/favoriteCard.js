import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./favoriteCard.module.css";
import AnimatedHeart from "../animatedHeart";
import { getIcon } from "../../utils/icons";
import { fahrenheitSelector } from "../../redux/selectors";

const FavoriteCard = ({ favoriteWeather, currentKey, isFahrenheit }) => {
  const celsius = get(
    favoriteWeather,
    "currentWeather.Temperature.Metric.Value",
    0
  );
  const fahrenheit = get(
    favoriteWeather,
    "currentWeather.Temperature.Imperial.Value",
    0
  );
  const cityName = get(favoriteWeather, "currentCityName", null);
  const weatherText = get(favoriteWeather, "currentWeather.WeatherText", null);
  const currentTemperature = isFahrenheit
    ? fahrenheit + " F"
    : Math.round(celsius) + " \u00b0C";

  const iconSrc = getIcon(
    get(favoriteWeather, "currentWeather.WeatherIcon", null)
  );
  const img = iconSrc ? (
    <img width="100px" src={iconSrc} alt="weather-icon"></img>
  ) : (
    <Skeleton variant="circle" width={80} height={80} />
  );

  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        {img}
        <div>{cityName || <Skeleton width={120} />}</div>
        <div>{weatherText || <Skeleton width={100} />}</div>
        <div>{currentTemperature || <Skeleton width={100} />}</div>
        <AnimatedHeart currentCityKey={currentKey} />
      </Grid>
    </div>
  );
};

FavoriteCard.propTypes = {
  // favoriteWeather: PropTypes.object.isRequired,
  currentKey: PropTypes.string.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(FavoriteCard);
