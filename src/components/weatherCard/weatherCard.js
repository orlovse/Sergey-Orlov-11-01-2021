import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { getIcon } from "../../utils/icons";
import styles from "./weatherCard.module.css";
import { fahrenheitSelector } from "../../redux/selectors";
import { celsiusToFahrenheit } from "../../utils";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const WeatherCard = ({ weatherData, isFahrenheit }) => {
  const icon = get(weatherData, "icon", null);
  const phrase = get(weatherData, "phrase", null);
  const weekday = get(weatherData, "weekday", null);

  const maximum = get(weatherData, "temperature.Maximum.Value", null);
  const minimum = get(weatherData, "temperature.Minimum.Value", null);

  const max = isFahrenheit ? celsiusToFahrenheit(maximum) : Math.round(maximum);
  const min = isFahrenheit ? celsiusToFahrenheit(minimum) : Math.round(minimum);
  const mark = isFahrenheit ? "F" : "\u00b0C";
  const stringTemperature = `${max} ${mark} / ${min} ${mark}`;

  const iconSrc = getIcon(icon);
  const img = iconSrc ? (
    <img width="100px" src={iconSrc} alt="weather-icon"></img>
  ) : (
    <Skeleton variant="circle" width={80} height={80} />
  );

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className={styles.card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Grid container direction="column" alignItems="center">
        {img}
        <div className={styles.text}>{weekday || <Skeleton width={120} />}</div>
        <div>{phrase || <Skeleton width={120} />}</div>
        <div className={styles.middleText}>
          {stringTemperature || <Skeleton width={120} />}
        </div>
      </Grid>
    </animated.div>
  );
};

WeatherCard.propTypes = {
  weatherData: PropTypes.object,
  isFahrenheit: PropTypes.bool.isRequired,
};

export default connect((state) => ({
  isFahrenheit: fahrenheitSelector(state),
}))(WeatherCard);
