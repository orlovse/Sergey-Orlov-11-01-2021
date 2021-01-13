import WeatherCard from "../weatherCard";
import { Grid, Box } from "@material-ui/core";
import { connect } from "react-redux";
import {
  currentWeatherSelector,
  fiveDaysModifiedSelector,
  currentCitySelector,
} from "../../redux/selectors";
import CurrentWeatherCard from "../currentWeatherCard";
import AnimatedHeart from "../animatedHeart";

const MainContainer = ({ currentWeather, fiveDaysWeather, currentCity }) => {
  if (Object.keys(currentWeather) > 1 && fiveDaysWeather.length < 1)
    return <div>Loading...</div>;

  const { WeatherText, WeatherIcon, Temperature } = currentWeather;
  const cardsList = fiveDaysWeather.map((weatherData) => (
    <Grid item xs={12} md="auto" key={weatherData.date}>
      <WeatherCard weatherData={weatherData} />
    </Grid>
  ));

  return (
    <Box className="box-padding">
      <Grid container direction="row" justify="space-between">
        <CurrentWeatherCard
          weatherIcon={WeatherIcon}
          temperature={Temperature}
          currentCity={currentCity}
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
  currentCity: currentCitySelector(state),
}))(MainContainer);
