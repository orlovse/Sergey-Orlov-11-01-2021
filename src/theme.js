import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#01579b",
    },
  },
});

export const lightTheme = createMuiTheme({
  type: "light",
  palette: {
    primary: {
      main: "#b3e5fc",
    },
    secondary: {
      main: "#b3e5fc",
    },
  },
});
