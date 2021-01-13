import { Box } from "@material-ui/core";
import styles from "./currentWeatherCard.module.css";
// import AnimatedIcons from "../animatedIcons";
// import { getIconName } from "../../utils";
import { getIcon } from "../../utils/icons";
import { connect } from "react-redux";
import { fahrenheitSelector } from "../../redux/selectors";

const CurrentWeatherCard = ({
  weatherIcon,
  temperature,
  currentCity,
  isFahrenheit,
}) => {
  // const iconName = getIconName(weatherIcon);
  if (!temperature) return "Loading...";
  const currentTemperature = isFahrenheit
    ? temperature.Imperial.Value + " F"
    : temperature.Metric.Value + " \u00b0C";
  const iconSrc = getIcon(weatherIcon);
  return (
    <Box style={{ margin: "2rem" }} className={styles.root}>
      <div>
        {/* <AnimatedIcons name={iconName} /> */}
        <img src={iconSrc} alt="weather-icon"></img>
      </div>

      <div className={styles.details}>
        <div>
          <h2>{currentCity.name}</h2>
          <h5>{currentCity.country} </h5>
        </div>
        <h3>{currentTemperature}</h3>
      </div>
    </Box>
  );
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(CurrentWeatherCard);
