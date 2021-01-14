import FavoriteCard from "../components/favoriteCard";
import { connect } from "react-redux";
import { favoritesSelector } from "../redux/selectors";
import { Grid } from "@material-ui/core";

const Favorites = ({ favorites }) => {
  const favoritesList = Object.keys(favorites).map((key) => (
    <Grid item xs={12} md={6} lg="auto" key={key}>
      <FavoriteCard currentKey={key} favoriteWeather={favorites[key]} />
    </Grid>
  ));
  return <Grid container>{favoritesList}</Grid>;
};

export default connect((state) => ({
  favorites: favoritesSelector(state),
}))(Favorites);
