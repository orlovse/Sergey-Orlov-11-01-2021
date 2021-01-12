import { Grid, CardContent } from "@material-ui/core";
import { getIcon } from "../../utils/icons";
import styles from "./weatherCard.module.css";

const WeatherCard = ({ weatherData }) => {
  const { icon, temperature, phrase, weekday } = weatherData;
  const iconSrc = getIcon(icon);
  const { Minimum, Maximum } = temperature;
  const stringTemperature = `${Maximum.Value} / ${Minimum.Value} ${"\u00b0"}${
    Minimum.Unit
  }`;
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <CardContent>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <img src={iconSrc} alt="weather-icon"></img>
            <div>{weekday}</div>
            <div>{phrase}</div>
            <div>{stringTemperature}</div>
          </Grid>
        </CardContent>
      </div>
    </div>
  );
};

export default WeatherCard;
