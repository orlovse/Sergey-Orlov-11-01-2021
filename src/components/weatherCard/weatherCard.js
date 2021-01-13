import { Grid } from "@material-ui/core";
import { getIcon } from "../../utils/icons";
import styles from "./weatherCard.module.css";
import { connect } from "react-redux";
import { fahrenheitSelector } from "../../redux/selectors";
import { celsiusToFahrenheit } from "../../utils";
// import AnimatedIcons from "../animatedIcons";
// import { getIconName } from "../../utils";

const WeatherCard = ({ weatherData, isFahrenheit }) => {
  const { icon, temperature, phrase, weekday } = weatherData;
  const iconSrc = getIcon(icon);
  // const iconName = getIconName(icon);
  const { Minimum, Maximum } = temperature;
  const max = isFahrenheit ? celsiusToFahrenheit(Maximum.Value) : Maximum.Value;
  const min = isFahrenheit ? celsiusToFahrenheit(Minimum.Value) : Minimum.Value;
  const mark = isFahrenheit ? "F" : "\u00b0C";
  const stringTemperature = `${max} / ${min} ${mark}`;
  return (
    <div className={styles.card}>
      <Grid container direction="column" alignItems="center">
        {/* <AnimatedIcons name={iconName} /> */}
        <img src={iconSrc} alt="weather-icon"></img>
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
