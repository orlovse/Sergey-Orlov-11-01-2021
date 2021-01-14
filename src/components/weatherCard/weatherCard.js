import { Grid } from "@material-ui/core";
import { getIcon } from "../../utils/icons";
import styles from "./weatherCard.module.css";
import { connect } from "react-redux";
import { fahrenheitSelector } from "../../redux/selectors";
import { celsiusToFahrenheit } from "../../utils";

const WeatherCard = ({ weatherData, isFahrenheit }) => {
  const { icon, temperature, phrase, weekday } = weatherData;
  const iconSrc = getIcon(icon);

  const { Minimum, Maximum } = temperature;
  const max = isFahrenheit
    ? celsiusToFahrenheit(Maximum.Value)
    : Math.round(Maximum.Value);
  const min = isFahrenheit
    ? celsiusToFahrenheit(Minimum.Value)
    : Math.round(Minimum.Value);
  const mark = isFahrenheit ? "F" : "\u00b0C";
  const stringTemperature = `${max} ${mark} / ${min} ${mark}`;
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        <img width="100px" src={iconSrc} alt="weather-icon"></img>
        <div className={styles.text}>{weekday}</div>
        <div>{phrase}</div>
        <div className={styles.middleText}>{stringTemperature}</div>
      </Grid>
    </div>
  );
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(WeatherCard);
