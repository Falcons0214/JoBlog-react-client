import React from "react";
import Button from "./Button/Navbutton";
import Searchbutton from "./Button/Searchbutton";
import "./Header.css";

class Headerbar extends React.Component {
  render() {
    return (
      <header className="header-bar">
        <h1>Joseph</h1>
          <div className="button-container">
            <Searchbutton currentPath={this.props.currentPath} iconMod={this.props.iconMod} />
            <Button navController={this.props.navController} iconMod={this.props.iconMod} />
          </div>
      </header>
    );
  }
}

export default Headerbar;
