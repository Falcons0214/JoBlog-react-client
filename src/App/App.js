import React from "react";
import "./App.css";
import Headerbar from "./Components/HeaderBar/Header";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import Router from "./Components/Router/Router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isNavOpen: false };
    this.navController = this.navController.bind(this);
  }

  navController() {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  }

  render() {
    return (
      <div>
        <Headerbar
          navController={this.navController}
          iconMod={this.state.isNavOpen}
        />
        <NavigationMenu
          navController={this.navController}
          canNavOpen={this.state.isNavOpen}
        />
        <div>
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
