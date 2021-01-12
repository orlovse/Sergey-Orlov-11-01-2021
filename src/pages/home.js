import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { connect } from "react-redux";
import { loadAllWeather } from "../redux/actions";
import { useEffect } from "react";

const Home = ({ loadAllWeather }) => {
  useEffect(() => {
    loadAllWeather("id");
  }, []);

  return (
    <>
      <AutocompleteSearch />
      <MainContainer />
    </>
  );
};

export default connect(null, {
  loadAllWeather,
})(Home);
