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
          <Admin pathRecorder={this.props.curPathRecord} />
        </Route>
        <Route path="/about">
          <About pathRecorder={this.props.curPathRecord} />
        </Route>
        <Route path="/:id" children={<Home pathRecorder={this.props.curPathRecord} />} />
        <Route path="/">
          <Home pathRecorder={this.props.curPathRecord} />
        </Route>
      </Switch>
    );
  }
}

export default Router;
