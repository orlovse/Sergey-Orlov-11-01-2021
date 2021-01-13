import { Grid } from "@material-ui/core";
import styles from "./favoriteCard.module.css";
import AnimatedHeart from "../animatedHeart";
import AnimatedIcons from "../animatedIcons";
import { getIconName } from "../../utils";

const FavoriteCard = ({ favoriteWeather, currentKey }) => {
  const iconName = getIconName(favoriteWeather.currentWeather.WeatherIcon);
  console.log("favoriteWeather", favoriteWeather);
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        {/* <img src={iconSrc} alt="weather-icon"></img> */}
        <AnimatedIcons name={iconName} />
        <div>{favoriteWeather.currentCityName}</div>
        <div>{favoriteWeather.currentWeather.WeatherText}</div>
        <div>{favoriteWeather.currentWeather.Temperature.Metric.Value}</div>
        <AnimatedHeart currentCityKey={currentKey} />
      </Grid>
    </div>
  );
};

export default FavoriteCard;
