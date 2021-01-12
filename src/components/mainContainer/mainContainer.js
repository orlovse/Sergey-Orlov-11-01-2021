import WeatherCard from "../weatherCard";
import { Grid, Box } from "@material-ui/core";
import styles from "./mainContainer.module.css";
import { connect } from "react-redux";
import {
  currentWeatherSelector,
  fiveDaysModifiedSelector,
} from "../../redux/selectors";
import CurrentWeatherCard from "../currentWeatherCard";
import AnimatedHeart from "../animatedHeart";

const MainContainer = ({ currentWeather, fiveDaysWeather }) => {
  if (Object.keys(currentWeather) > 1 && fiveDaysWeather.length < 1)
    return <div>Loading...</div>;

  const { WeatherText, WeatherIcon, Temperature } = currentWeather;
  const cardsList = fiveDaysWeather.map((weatherData) => (
    <Grid item xs key={weatherData.date}>
      <WeatherCard weatherData={weatherData} />
    </Grid>
  ));

  return (
    <Box className={styles.box}>
      <Grid container direction="row" justify="space-between">
        <CurrentWeatherCard
          weatherIcon={WeatherIcon}
          temperature={Temperature}
        />
        <AnimatedHeart />
      </Grid>

      <h2>{WeatherText}</h2>
      <Grid container justify="space-between">
        {cardsList}
      </Grid>
    </Box>
  );
};

export default connect((state) => ({
  currentWeather: currentWeatherSelector(state),
  fiveDaysWeather: fiveDaysModifiedSelector(state),
}))(MainContainer);
