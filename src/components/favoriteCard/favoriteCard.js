import { Link } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./favoriteCard.module.css";
import AnimatedHeart from "../animatedHeart";
import { getIcon } from "../../utils/icons";
import { fahrenheitSelector } from "../../redux/selectors";
import { setCurrentCity, loadAllWeather } from "../../redux/actions";

const FavoriteCard = ({
  favoriteWeather,
  currentKey,
  isFahrenheit,
  setCurrentCity,
  loadAllWeather,
}) => {
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
  const countryName = get(favoriteWeather, "currentCountry", null);
  const weatherText = get(favoriteWeather, "currentWeather.WeatherText", null);

  const setAsCurrentCity = () => {
    loadAllWeather(currentKey);
    setCurrentCity({ key: currentKey, name: cityName, country: countryName });
  };

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

        <Link to="/" onClick={setAsCurrentCity} className={styles.text}>
          {cityName || <Skeleton width={120} />}
        </Link>

        <div>{countryName || <Skeleton width={100} />}</div>
        <div>{weatherText || <Skeleton width={100} />}</div>
        <div className={styles.middleText}>
          {currentTemperature || <Skeleton width={100} />}
        </div>
        <AnimatedHeart currentCityKey={currentKey} />
      </Grid>
    </div>
  );
};

FavoriteCard.propTypes = {
  // favoriteWeather: PropTypes.object.isRequired,
  currentKey: PropTypes.string.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  loadAllWeather: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    isFahrenheit: fahrenheitSelector(state),
  }),
  { setCurrentCity, loadAllWeather }
)(FavoriteCard);
