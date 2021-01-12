import { useSnackbar } from "notistack";
import styles from "./animatedHeart.module.css";
import { connect } from "react-redux";
import {
  isFavoriteCity,
  currentCityKeySelector,
  currentWeatherSelector,
} from "../../redux/selectors";
import { addFavorite, removeFromFavorite } from "../../redux/actions";

const AnimatedHeart = ({
  addFavorite,
  isFavoriteCity,
  currentCityKey,
  removeFromFavorite,
  currentWeather,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    if (isFavoriteCity) {
      removeFromFavorite(currentCityKey);
      enqueueSnackbar("Remove", { variant: "info" });
    } else {
      addFavorite(currentCityKey, currentWeather);
      enqueueSnackbar("Add", { variant: "success" });
    }
  };
  const style = isFavoriteCity ? styles.active : styles.heart;
  return <div className={style} onClick={handleClick}></div>;
};

export default connect(
  (state) => ({
    isFavoriteCity: isFavoriteCity(state),
    currentCityKey: currentCityKeySelector(state),
    currentWeather: currentWeatherSelector(state),
  }),
  { addFavorite, removeFromFavorite }
)(AnimatedHeart);
