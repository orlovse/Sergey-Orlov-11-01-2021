import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Button, Grid, IconButton, Toolbar } from "@material-ui/core";
import styles from "./navbar.module.css";
import { darkThemeSelector, fahrenheitSelector } from "../../redux/selectors";
import { switchDark, switchFahrenheit } from "../../redux/actions";

import darkIcon from "../../resources/svg/dark.svg";
import lightIcon from "../../resources/svg/light.svg";
import celsiusIcon from "../../resources/svg/celsius.svg";
import fahrenheitIcon from "../../resources/svg/fahrenheit.svg";

const Navbar = ({
  isDarkTheme,
  switchDark,
  isFahrenheit,
  switchFahrenheit,
}) => {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Favorites", link: "/favorites" },
  ];

  const handleSwitchTheme = () => {
    switchDark(!isDarkTheme);
  };

  const handleSwitchFahrenheit = () => {
    switchFahrenheit(!isFahrenheit);
  };

  const renderLinks = links.map(({ id, name, link }) => (
    <NavLink
      exact
      key={id}
      to={link}
      className={styles.link}
      activeClassName={styles.active}
    >
      <Button>{name}</Button>
    </NavLink>
  ));

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justify="space-between">
            <div>
              <IconButton onClick={handleSwitchTheme}>
                {isDarkTheme ? (
                  <img src={darkIcon} alt="dark theme icon"></img>
                ) : (
                  <img src={lightIcon} alt="light theme icon"></img>
                )}
              </IconButton>

              <IconButton onClick={handleSwitchFahrenheit}>
                {isFahrenheit ? (
                  <img
                    src={fahrenheitIcon}
                    width="30px"
                    alt="dark theme icon"
                  ></img>
                ) : (
                  <img
                    src={celsiusIcon}
                    width="30px"
                    alt="light theme icon"
                  ></img>
                )}
              </IconButton>
            </div>

            <div className={styles.links}>{renderLinks}</div>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  isFahrenheit: PropTypes.bool.isRequired,
  switchDark: PropTypes.func.isRequired,
  switchFahrenheit: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    isDarkTheme: darkThemeSelector(state),
    isFahrenheit: fahrenheitSelector(state),
  }),
  { switchDark, switchFahrenheit }
)(Navbar);
