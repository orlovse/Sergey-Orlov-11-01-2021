import styles from "./animatedHeart.module.css";
import { connect } from "react-redux";
import { isFavoriteCity, currentCityKeySelector } from "../../redux/selectors";
import { addFavorite, removeFromFavorite } from "../../redux/actions";

const AnimatedHeart = ({
  addFavorite,
  isFavoriteCity,
  currentCityKey,
  removeFromFavorite,
}) => {
  const handleClick = () => {
    if (isFavoriteCity) {
      removeFromFavorite(currentCityKey);
    } else {
      addFavorite(currentCityKey);
    }
  };
  const style = isFavoriteCity ? styles.active : styles.heart;
  return <div className={style} onClick={handleClick}></div>;
};

export default connect(
  (state) => ({
    isFavoriteCity: isFavoriteCity(state),
    currentCityKey: currentCityKeySelector(state),
  }),
  { addFavorite, removeFromFavorite }
)(AnimatedHeart);
