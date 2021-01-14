import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import FavoriteCard from "../components/favoriteCard";
import { favoritesSelector } from "../redux/selectors";

const Favorites = ({ favorites }) => {
  const favoritesList = Object.keys(favorites).map((key) => (
    <Grid item xs={12} md={6} lg="auto" key={key}>
      <FavoriteCard currentKey={key} favoriteWeather={favorites[key]} />
    </Grid>
  ));
  return <Grid container>{favoritesList}</Grid>;
};

Favorites.propTypes = {
  favorites: PropTypes.object,
};

export default connect((state) => ({
  favorites: favoritesSelector(state),
}))(Favorites);
