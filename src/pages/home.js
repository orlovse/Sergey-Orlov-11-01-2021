import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { connect } from "react-redux";
import { loadCurrentWeather, loadFiveDaysWeather } from "../redux/actions";
import { useEffect } from "react";

const Home = ({ loadCurrentWeather, loadFiveDaysWeather }) => {
  useEffect(() => {
    loadCurrentWeather("id");
    loadFiveDaysWeather("id");
  }, []);

  return (
    <>
      <AutocompleteSearch />
      <MainContainer />
    </>
  );
};

export default connect(null, { loadCurrentWeather, loadFiveDaysWeather })(Home);
