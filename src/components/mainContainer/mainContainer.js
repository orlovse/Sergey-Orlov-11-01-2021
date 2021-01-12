import WeatherCard from "../weatherCard";
import { fiveDays } from "../../mockData";
import { Grid, Box } from "@material-ui/core";
import styles from "./mainContainer.module.css";
import { connect } from "react-redux";
import { currentWeather } from "../../redux/selectors";
import CurrentWeatherCard from "../currentWeatherCard";

const MainContainer = ({ currentWeather }) => {
  const { WeatherText, WeatherIcon, Temperature } = currentWeather;
  const cardsList = fiveDays.DailyForecasts.map((day) => (
    <Grid item xs key={day.Date}>
      <WeatherCard />
    </Grid>
  ));

  return (
    <Box className={styles.box}>
      <CurrentWeatherCard weatherIcon={WeatherIcon} temperature={Temperature} />
      <h2>{WeatherText}</h2>
      <Grid container justify="space-between">
        {cardsList}
      </Grid>
    </Box>
  );
};

export default connect((state) => ({
  currentWeather: currentWeather(state),
}))(MainContainer);
