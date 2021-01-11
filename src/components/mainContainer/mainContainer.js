import WeatherCard from "../weatherCard";
import { fiveDays } from "../../mockData";
import { Grid } from "@material-ui/core";
const MainContainer = () => {
  const cardsList = fiveDays.DailyForecasts.map((day) => (
    <Grid item xs key={day.Date}>
      <WeatherCard />
    </Grid>
  ));

  return (
    <>
      <Grid container justify="space-between" spacing={3}>
        {cardsList}
      </Grid>
    </>
  );
};

export default MainContainer;
