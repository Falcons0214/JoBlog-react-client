import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Post from "../Post/Post";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/about">
          <About curPathRecord={this.props.curPathRecord} />
        </Route>
        <Route path="/movie">
          <Home data={"movieposts"} curPathRecord={this.props.curPathRecord} />
        </Route>
        <Route path="/travel">
          <Home data={"travelposts"} curPathRecord={this.props.curPathRecord} />
        </Route>
        <Route path="/food">
          <Home data={"foodposts"} curPathRecord={this.props.curPathRecord} />
        </Route>
        <Route
          path="/post/:type/:id"
          children={<Post curPathRecord={this.props.curPathRecord} />}
        />
        <Route path="/">
          <Home data={"lifeposts"} curPathRecord={this.props.curPathRecord} />
        </Route>
      </Switch>
    );
  }
}

export default Router;
