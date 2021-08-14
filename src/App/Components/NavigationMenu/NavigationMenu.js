import React from "react";
import Items from "./ListItem/Items";
import "./Navigation.css";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "Home",
          url: "/",
        },
        { 
          title: "Movie",
          url: "/movie",
        },
        { 
          title: "Life",
          url: "/life",
        },
        { 
          title: "About me",
          url: "/about",
        },
        {
          title: "Admin",
          url: "/admin",
        }
      ],
    };
    this.navSlider = this.navSlider.bind(this);
  }

  navSlider(flag) {
    return flag === true ? "navigation-menu active" : "navigation-menu";
  }

  render() {
    return (
      <div className={this.navSlider(this.props.canNavOpen)}>
        <Items navClose={this.props.navController} items={this.state.list} />
      </div>
    );
  }
}

export default NavigationMenu;
