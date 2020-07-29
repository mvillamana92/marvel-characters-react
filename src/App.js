import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Character from "./components/Character";
import NavMenu from "./components/NavMenu";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/character">
          <List />
        </Route>
        <Route exact path="/character/:id">
          <Character />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
