import FavoriteCard from "../components/favoriteCard";
import { connect } from "react-redux";
import { favoritesSelector } from "../redux/selectors";

const Favorites = ({ favorites }) => {
  const favoritesList = Object.keys(favorites).map((key) => (
    <FavoriteCard key={key} currentKey={key} favoriteWeather={favorites[key]} />
  ));
  return <div>{favoritesList}</div>;
};

export default connect((state) => ({
  favorites: favoritesSelector(state),
}))(Favorites);
