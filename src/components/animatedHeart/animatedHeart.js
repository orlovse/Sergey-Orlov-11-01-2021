import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  favoritesSelector,
  currentWeatherSelector,
  currentCityNameSelector,
} from "../../redux/selectors";
import { addFavorite, removeFromFavorite } from "../../redux/actions";
import styles from "./animatedHeart.module.css";

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

AnimatedHeart.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  currentCityKey: PropTypes.string.isRequired,
  currentCityName: PropTypes.string.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  currentWeather: PropTypes.object,
  favorites: PropTypes.object,
};

export default connect(
  (state) => ({
    currentCityName: currentCityNameSelector(state),
    currentWeather: currentWeatherSelector(state),
    favorites: favoritesSelector(state),
  }),
  { addFavorite, removeFromFavorite }
)(AnimatedHeart);
