import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  currentWeatherSelector,
  fiveDaysModifiedSelector,
  currentCitySelector,
  currentCityKeySelector,
  currentWeatherLoadingSelector,
  currentWeatherLoadedSelector,
} from "../../redux/selectors";
import CurrentWeatherCard from "../currentWeatherCard";
import AnimatedHeart from "../animatedHeart";
import WeatherCard from "../weatherCard";

const MainContainer = ({
  currentWeather,
  currentWeatherLoading,
  currentWeatherLoaded,
  fiveDaysWeather,
  currentCity,
  currentCityKey,
}) => {
  const { WeatherText, WeatherIcon, Temperature } = currentWeather;

  const currentWeatherElement =
    !currentWeatherLoading && currentWeatherLoaded ? (
      <CurrentWeatherCard
        weatherIcon={WeatherIcon}
        temperature={Temperature}
        currentCity={currentCity}
      />
    ) : (
      <Grid container alignItems="center">
        <Skeleton variant="circle" width={100} height={100} />
        <div>
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
        </div>
      </Grid>
    );

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
          {currentWeatherElement}
        </Grid>
        <Grid item xs={12} md="auto" className="flex-center">
          <AnimatedHeart currentCityKey={currentCityKey} />
        </Grid>
      </Grid>
      <h2 style={{ fontSize: "3rem", margin: "0" }}>
        {WeatherText || (
          <Skeleton width={150} style={{ display: "inline-block" }} />
        )}
      </h2>
      <Grid container justify="space-between">
        {cardsList}
      </Grid>
    </Box>
  );
};

MainContainer.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  currentWeatherLoading: PropTypes.bool.isRequired,
  currentWeatherLoaded: PropTypes.bool.isRequired,
  fiveDaysWeather: PropTypes.array.isRequired,
  currentCity: PropTypes.object.isRequired,
  currentCityKey: PropTypes.string.isRequired,
};

export default connect((state) => ({
  currentWeather: currentWeatherSelector(state),
  currentWeatherLoading: currentWeatherLoadingSelector(state),
  currentWeatherLoaded: currentWeatherLoadedSelector(state),
  fiveDaysWeather: fiveDaysModifiedSelector(state),
  currentCity: currentCitySelector(state),
  currentCityKey: currentCityKeySelector(state),
}))(MainContainer);
