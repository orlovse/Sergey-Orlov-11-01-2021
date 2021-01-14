import { Grid } from "@material-ui/core";
import styles from "./favoriteCard.module.css";
import AnimatedHeart from "../animatedHeart";
import { getIcon } from "../../utils/icons";

const FavoriteCard = ({ favoriteWeather, currentKey }) => {
  const iconSrc = getIcon(favoriteWeather.WeatherIcon);
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        <img width="100px" src={iconSrc} alt="weather-icon"></img>
        <div>{favoriteWeather.currentCityName}</div>
        <div>{favoriteWeather.currentWeather.WeatherText}</div>
        <div>{favoriteWeather.currentWeather.Temperature.Metric.Value}</div>
        <AnimatedHeart currentCityKey={currentKey} />
      </Grid>
    </div>
  );
};

export default FavoriteCard;
