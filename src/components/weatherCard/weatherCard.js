import Card from "@material-ui/core/Card";
import { getIcon } from "../../utils/icons";
import { Grid, CardContent } from "@material-ui/core";
import styles from "./weatherCard.module.css";

const WeatherCard = () => {
  const icon = getIcon(3);
  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <img src={icon} alt="weather-icon"></img>
            <div>Friday</div>
            <div>Sunny</div>
            <div>24 C</div>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default WeatherCard;
