import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid, Switch, Hidden } from "@material-ui/core";
import styles from "./navbar.module.css";
import { darkThemeSelector, fahrenheitSelector } from "../../redux/selectors";
import { switchDark, switchFahrenheit } from "../../redux/actions";

const Navbar = ({ darkTheme, switchDark, isFahrenheit, switchFahrenheit }) => {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Favorites", link: "/favorites" },
  ];

  const handleSwitchTheme = () => {
    switchDark(!darkTheme);
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
              <Hidden smDown>
                <Switch
                  checked={darkTheme}
                  onChange={handleSwitchTheme}
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <Switch
                  checked={isFahrenheit}
                  onChange={handleSwitchFahrenheit}
                  name="checkedB"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Hidden>
            </div>

            <div>{renderLinks}</div>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  darkTheme: PropTypes.bool,
  switchDark: PropTypes.func,
};

export default connect(
  (state) => ({
    darkTheme: darkThemeSelector(state),
    isFahrenheit: fahrenheitSelector(state),
  }),
  { switchDark, switchFahrenheit }
)(Navbar);
