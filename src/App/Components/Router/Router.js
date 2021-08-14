import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:id" children={<Home />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default Router;
