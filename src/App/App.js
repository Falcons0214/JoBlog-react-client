import React from "react";
import "./App.css";
import Headerbar from "./Components/HeaderBar/Header";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import Router from "./Components/Router/Router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      currentPath: Boolean,
    };
    this.navController = this.navController.bind(this);
    this.curPathRecord = this.curPathRecord.bind(this);
  }

  navController() {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  }

  curPathRecord(bool) {
    this.setState(() => ({
      currentPath: bool,
    }));
  }

  render() {
    return (
      <div className="viewContainer">
        <Headerbar
          navController={this.navController}
          currentPath={this.state.currentPath}
          iconMod={this.state.isNavOpen}
        />
        <NavigationMenu
          navController={this.navController}
          canNavOpen={this.state.isNavOpen}
        />
        <div className="pages-container">
          <Router curPathRecord={this.curPathRecord} />
        </div>
      </div>
    );
  }
}

export default App;
