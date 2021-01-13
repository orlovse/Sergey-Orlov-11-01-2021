import { Grid } from "@material-ui/core";
import styles from "./favoriteCard.module.css";
import AnimatedHeart from "../animatedHeart";
import AnimatedIcons from "../animatedIcons";
import { getIconName } from "../../utils";

const FavoriteCard = ({ favoriteWeather }) => {
  const iconName = getIconName(favoriteWeather.WeatherIcon);
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        {/* <img src={iconSrc} alt="weather-icon"></img> */}
        <AnimatedIcons name={iconName} />
        <div>{favoriteWeather.WeatherText}</div>
        <div>{favoriteWeather.Temperature.Metric.Value}</div>
        <AnimatedHeart />
      </Grid>
    </div>
  );
};

export default FavoriteCard;
