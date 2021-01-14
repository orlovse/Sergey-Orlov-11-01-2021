import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import styles from "./pages.module.css";
import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { loadAllWeather } from "../redux/actions";
import { currentCityKeySelector } from "../redux/selectors";

const Home = ({ loadAllWeather, cityKey }) => {
  useEffect(() => {
    loadAllWeather(cityKey);
  }, [cityKey, loadAllWeather]);

  return (
    <>
      <Box className={styles.box}>
        <AutocompleteSearch />
      </Box>
      <Box className={styles.box}>
        <MainContainer />
      </Box>
    </>
  );
};

Home.propTypes = {
  loadAllWeather: PropTypes.func.isRequired,
  cityKey: PropTypes.string.isRequired,
};

export default connect(
  (state) => ({
    cityKey: currentCityKeySelector(state),
  }),
  {
    loadAllWeather,
  }
)(Home);
