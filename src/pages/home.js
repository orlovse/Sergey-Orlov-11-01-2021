import { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import styles from "./home.module.css";
import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { loadAllWeather } from "../redux/actions";
import { currentCityKeySelector } from "../redux/selectors";

const Home = ({ loadAllWeather, cityKey }) => {
  useEffect(() => {
    loadAllWeather(cityKey);
  }, []);

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

export default connect(
  (state) => ({
    cityKey: currentCityKeySelector(state),
  }),
  {
    loadAllWeather,
  }
)(Home);
