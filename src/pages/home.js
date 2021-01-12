import MainContainer from "../components/mainContainer";
import AutocompleteSearch from "../components/autocompleteSearch";
import { connect } from "react-redux";
import { loadCurrentWeather } from "../redux/actions";
import { useEffect } from "react";

const Home = ({ loadCurrentWeather }) => {
  useEffect(() => {
    loadCurrentWeather("id");
  }, []);

  return (
    <>
      <AutocompleteSearch />
      <MainContainer />
    </>
  );
};

export default connect(null, { loadCurrentWeather })(Home);
