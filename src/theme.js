import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#0083e7",
    },
  },
});

export const lightTheme = createMuiTheme({
  type: "light",
  background: {
    default: "#01579b",
  },
  palette: {
    primary: {
      main: "#b3e5fc",
    },
    secondary: {
      main: "#ecf9ff",
    },
  },
});
