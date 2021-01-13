import { Box } from "@material-ui/core";
import styles from "./currentWeatherCard.module.css";
import AnimatedIcons from "../animatedIcons";
import { getIconName } from "../../utils";

const CurrentWeatherCard = ({ weatherIcon, temperature, currentCity }) => {
  const iconName = getIconName(weatherIcon);
  return (
    <Box style={{ margin: "2rem" }} className={styles.root}>
      <div>
        <AnimatedIcons name={iconName} />
      </div>

      <div className={styles.details}>
        <div>
          <h2>{currentCity.name}</h2>
          <h5>{currentCity.country} </h5>
        </div>
        <h3>{temperature && temperature.Metric.Value}</h3>
      </div>
    </Box>
  );
};

export default CurrentWeatherCard;
