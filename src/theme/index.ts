import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "vazir, sans-serif",
  },
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          background: "rgba(255,255,255,0.2)",
          direction: "rtl",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          direction: "ltr",
        },
        contained: {
          background: "rgba(255,255,255,0.2)",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});
