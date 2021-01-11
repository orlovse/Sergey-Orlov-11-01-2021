import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid, Switch } from "@material-ui/core";
import styles from "./navbar.module.css";
import { darkThemeSelector } from "../../redux/selectors";
import { switchDark } from "../../redux/actions";

const Navbar = ({ darkTheme, switchDark }) => {
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Favorites", link: "/favorites" },
  ];

  const handleSwitch = () => {
    console.log("currentTheme", darkTheme);
    switchDark(!darkTheme);
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
            {renderLinks}
            <Switch
              checked={darkTheme}
              onChange={handleSwitch}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
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
  }),
  { switchDark }
)(Navbar);
