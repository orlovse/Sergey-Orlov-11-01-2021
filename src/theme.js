import { createMuiTheme } from "@material-ui/core/styles";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#ecf9ff",
    },
  },

  overrides: {
    MuiPaper: {
      root: {
        background:
          "linear-gradient(90deg, rgba(0,37,70,1) 0%, rgba(74,119,171,1) 100%)",
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
    text: {
      primary: "#373738",
    },
  },

  overrides: {
    MuiPaper: {
      root: {
        background:
          " linear-gradient(337deg, rgba(58,168,255,1) 15%, rgba(155,204,255,1) 79%, rgba(255,225,160,1) 99%)",
      },
    },
  },
});
