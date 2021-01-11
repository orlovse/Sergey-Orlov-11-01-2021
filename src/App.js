import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./theme";
import { darkThemeSelector } from "./redux/selectors";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import NotFoundPage from "./components/notFoundPage";

function App({ isDarkTheme }) {
  const currentTheme =
    isDarkTheme === true ? { ...darkTheme } : { ...lightTheme };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <Navbar />
        <Box bgcolor="secondary.main" className="box">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorites" component={Favorites} />
              <Route path="/" component={NotFoundPage} />
            </Switch>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default connect((state) => ({
  isDarkTheme: darkThemeSelector(state),
}))(App);
