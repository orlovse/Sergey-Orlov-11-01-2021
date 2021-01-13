import FavoriteCard from "../components/favoriteCard";
import { connect } from "react-redux";
import { favoritesSelector } from "../redux/selectors";
import { Grid } from "@material-ui/core";

const Favorites = ({ favorites }) => {
  const favoritesList = Object.keys(favorites).map((key) => (
    <FavoriteCard key={key} currentKey={key} favoriteWeather={favorites[key]} />
  ));
  return (
    <Grid container justify="space-between">
      {favoritesList}
    </Grid>
  );
};

export default connect((state) => ({
  favorites: favoritesSelector(state),
}))(Favorites);
