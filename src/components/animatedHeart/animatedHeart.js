import styles from "./animatedHeart.module.css";
import { connect } from "react-redux";
import {
  favoritesSelector,
  currentWeatherSelector,
  currentCityNameSelector,
} from "../../redux/selectors";
import { addFavorite, removeFromFavorite } from "../../redux/actions";

const AnimatedHeart = ({
  addFavorite,
  currentCityKey,
  currentCityName,
  removeFromFavorite,
  currentWeather,
  favorites,
}) => {
  const isFavoriteCity = !!favorites[currentCityKey];
  const handleClick = () => {
    if (isFavoriteCity) {
      removeFromFavorite(currentCityKey);
    } else {
      addFavorite(currentCityKey, currentCityName, currentWeather);
    }
  };
  const style = isFavoriteCity ? styles.active : styles.heart;
  return <div className={style} onClick={handleClick}></div>;
};

export default connect(
  (state) => ({
    currentCityName: currentCityNameSelector(state),
    currentWeather: currentWeatherSelector(state),
    favorites: favoritesSelector(state),
  }),
  { addFavorite, removeFromFavorite }
)(AnimatedHeart);
