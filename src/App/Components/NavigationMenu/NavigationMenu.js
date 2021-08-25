import React from "react";
import Items from "./ListItem/Items";
import "./Navigation.css";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { 
          title: "Life",
          url: "/",
        },
        { 
          title: "Food",
          url: "/food",
        },
        { 
          title: "Movie",
          url: "/movie",
        },
        { 
          title: "Travel",
          url: "/travel",
        },
        { 
          title: "About me",
          url: "/about",
        },
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
