import WeatherCard from "../weatherCard";
import { fiveDays } from "../../mockData";
import { Grid, Box } from "@material-ui/core";
import styles from "./mainContainer.module.css";

const MainContainer = () => {
  const cardsList = fiveDays.DailyForecasts.map((day) => (
    <Grid item xs key={day.Date}>
      <WeatherCard />
    </Grid>
  ));

  return (
    <Box className={styles.box}>
      <Grid container justify="space-between">
        {cardsList}
      </Grid>
    </Box>
  );
};

export default MainContainer;
