import React from "react";
import "./Navbutton.css";

class Button extends React.Component {
  
  constructor(porps) {
    super(porps);
    this.iconModifier = this.iconModifier.bind(this);
    this.iconClassMod = this.iconClassMod.bind(this);
  }

  iconClassMod(flag) {
    return flag === true ? "menu-icon active" : "menu-icon";
  }

  iconModifier(flag) {
    return flag === true ? "fas fa-align-right fa-times" : "fas fa-align-right";
  }
  
  render() {
    return (
      <button className={this.iconClassMod(this.props.iconMod)} onClick={this.props.navController}>
        <i className={this.iconModifier(this.props.iconMod)}></i>
      </button>
    );
  }
}

export default Button;
