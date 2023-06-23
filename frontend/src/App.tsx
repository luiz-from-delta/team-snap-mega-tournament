import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Join from "./pages/Join";
import Teams from "./pages/Teams";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";

const BACKEND_API_URL =
  process.env.BACKEND_API_URL || "http://backend.localhost";

const App: React.FC = () => {
  return (
    <Provider
      store={store({
        teams: [],
      })}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/join">
              <Join baseurl={BACKEND_API_URL} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
