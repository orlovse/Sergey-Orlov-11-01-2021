import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Grid, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./theme";
import { darkThemeSelector } from "./redux/selectors";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import NotFoundPage from "./pages/notFoundPage";
import { getLocation, switchDark } from "./redux/actions";
import { ToastContainer } from "react-toastify";
import { setDarkThemeIfNight } from "./utils";

function App({ isDarkTheme, getLocation, switchDark }) {
  useEffect(() => {
    getLocation();
    setDarkThemeIfNight(switchDark);
  }, []);

  const currentTheme =
    isDarkTheme === true ? { ...darkTheme } : { ...lightTheme };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <ToastContainer autoClose={2000} />
        <Navbar />
        <Paper className="box" square>
          <Container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
                <Route path="/" component={NotFoundPage} />
              </Switch>
            </Grid>
          </Container>
        </Paper>
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
  { getLocation, switchDark }
)(App);
