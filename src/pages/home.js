import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { connect } from "react-redux";
import { loadAllWeather } from "../redux/actions";
import { useEffect } from "react";
import { currentCityKeySelector } from "../redux/selectors";

const Home = ({ loadAllWeather, cityKey }) => {
  useEffect(() => {
    loadAllWeather(cityKey);
  }, []);

  return (
    <>
      <AutocompleteSearch />
      <MainContainer />
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
