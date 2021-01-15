import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  favoritesSelector,
  currentWeatherSelector,
  currentCitySelector,
} from "../../redux/selectors";
import { addFavorite, removeFromFavorite } from "../../redux/actions";
import styles from "./animatedHeart.module.css";

const AnimatedHeart = ({
  addFavorite,
  currentCity,
  currentCityKey,
  removeFromFavorite,
  currentWeather,
  favorites,
}) => {
  const { name, country } = currentCity;
  const isFavoriteCity = !!favorites[currentCityKey];
  const handleClick = () => {
    if (isFavoriteCity) {
      removeFromFavorite(currentCityKey);
    } else {
      addFavorite(currentCityKey, name, country, currentWeather);
    }
  };
  const style = isFavoriteCity ? styles.active : styles.heart;
  return <div className={style} onClick={handleClick}></div>;
};

AnimatedHeart.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  currentCityKey: PropTypes.string.isRequired,
  currentCity: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  currentWeather: PropTypes.object,
  favorites: PropTypes.object,
};

export default connect(
  (state) => ({
    currentCity: currentCitySelector(state),
    currentWeather: currentWeatherSelector(state),
    favorites: favoritesSelector(state),
  }),
  { addFavorite, removeFromFavorite }
)(AnimatedHeart);
