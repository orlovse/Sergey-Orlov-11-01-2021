import WeatherCard from "../weatherCard";
import { Grid, Box } from "@material-ui/core";
import { connect } from "react-redux";
import {
  currentWeatherSelector,
  fiveDaysModifiedSelector,
  currentCitySelector,
  currentCityKeySelector,
} from "../../redux/selectors";
import CurrentWeatherCard from "../currentWeatherCard";
import AnimatedHeart from "../animatedHeart";

const MainContainer = ({
  currentWeather,
  fiveDaysWeather,
  currentCity,
  currentCityKey,
}) => {
  const { WeatherText, WeatherIcon, Temperature } = currentWeather;
  const cardsList =
    fiveDaysWeather.length > 1
      ? fiveDaysWeather.map((weatherData) => (
          <Grid item xs={12} md={6} lg="auto" key={weatherData.date}>
            <WeatherCard weatherData={weatherData} />
          </Grid>
        ))
      : [1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} md={6} lg="auto" key={item}>
            <WeatherCard weatherData={null} />
          </Grid>
        ));

  return (
    <Box className="box-padding">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md="auto">
          <CurrentWeatherCard
            weatherIcon={WeatherIcon}
            temperature={Temperature}
            currentCity={currentCity}
          />
        </Grid>
        <Grid item xs={12} md="auto" className="flex-center">
          <AnimatedHeart currentCityKey={currentCityKey} />
        </Grid>
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
  currentCityKey: currentCityKeySelector(state),
}))(MainContainer);
