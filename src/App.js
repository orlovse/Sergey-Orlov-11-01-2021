import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Box, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./theme";
import { darkThemeSelector } from "./redux/selectors";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import NotFoundPage from "./pages/notFoundPage";
import { getLocation } from "./redux/actions";

function App({ isDarkTheme, getLocation }) {
  useEffect(() => {
    getLocation();
  }, []);
  const currentTheme =
    isDarkTheme === true ? { ...darkTheme } : { ...lightTheme };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <Navbar />
        <Box bgcolor="secondary.main" className="box">
          <Container>
            <Grid container justify="center">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
                <Route path="/" component={NotFoundPage} />
              </Switch>
            </Grid>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default connect(
  (state) => ({
    isDarkTheme: darkThemeSelector(state),
  }),
  { getLocation }
)(App);
