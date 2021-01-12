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

  overrides: {
    MuiPaper: {
      root: {
        background:
          "linear-gradient(90deg, rgba(0,63,119,1) 0%, rgba(105,161,227,1) 100%)",
      },
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b3e5fc",
    },
    secondary: {
      main: "#ecf9ff",
    },
  },

  overrides: {
    MuiPaper: {
      root: {
        background:
          "linear-gradient(298deg, rgba(255, 246, 199, 1) 0%, rgba(176, 183, 255, 1) 100%)",
      },
    },
  },
});
