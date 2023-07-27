import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "router";
import { theme } from "theme";
import { store } from "store";

import "assets/fonts/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
