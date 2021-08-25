import React from "react";
import "./Searchbutton.css";

class Searchbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    this.mouseEvent = this.mouseEvent.bind(this);
    this.iconColor = this.iconColor.bind(this);
  }

  mouseEvent() {
    this.setState((prevState) => ({
      flag: !prevState.flag,
    }));
  }

  iconColor() {
    return this.state.flag === false ? "search-btn" : "search-btn active";
  }

  render() {
    if (this.props.currentPath || this.props.iconMod) {
      return <span />;
    } else {
      return (
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            name=""
            placeholder="Post search"
          />
          <p
            className={this.iconColor()}
            onMouseDown={this.mouseEvent}
            onMouseUp={this.mouseEvent}
          >
            <i className="fas fa-search"></i>
          </p>
        </div>
      );
    }
  }
}

export default Searchbutton;
