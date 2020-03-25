import React from "react";
import { Switch, Route } from "react-router-dom";

import Neighborhood from "./components/Neighborhood";
import Main from "./components/Main";

import { createMuiTheme } from "@material-ui/core/styles";
import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "@material-ui/styles";

import Error404 from "./components/error404";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#00838f"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f"
    }
  }
});

const routes = [
  {
    path: "/jardim-cacula",
    render: () => <Neighborhood name="jardimCacula" />
  },
  {
    path: "/vila-bonita",
    render: () => <Neighborhood name="vilaBonita" />
  },
  {
    path: "/santa-luzia",
    render: () => <Neighborhood name="santaLuzia" />
  }
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              render={route.render}
            />
          ))}
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
