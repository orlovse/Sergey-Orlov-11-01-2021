import { Grid } from "@material-ui/core";
import styles from "./weatherCard.module.css";
import AnimatedIcons from "../animatedIcons";
import { getIconName } from "../../utils";

const WeatherCard = ({ weatherData }) => {
  const { icon, temperature, phrase, weekday } = weatherData;
  const iconName = getIconName(icon);
  const { Minimum, Maximum } = temperature;
  const stringTemperature = `${Maximum.Value} / ${Minimum.Value} ${"\u00b0"}${
    Minimum.Unit
  }`;
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        <AnimatedIcons name={iconName} />
        <div className={styles.text}>{weekday}</div>
        <div>{phrase}</div>
        <div className={styles.middleText}>{stringTemperature}</div>
      </Grid>
    </div>
  );
};

export default WeatherCard;
