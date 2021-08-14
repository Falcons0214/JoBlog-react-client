import React from "react";
// import { Link, useParams } from "react-router-dom";
import "./Home.css";
import test1 from "./3.jpg";

// Home & Movie & life using the same page, but distinguish by URL parameters. { /:id }

function postItem(props) {}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.pathRecorder(false);
  }

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <h2 className="post-title"> Post title </h2>
          <div className="post-meta">
            <span>Joseph by </span>
            <span>7/12/2020 06:22:00 下午</span>
            <br />
            <span>Tag: </span>
            <span>movie</span>
          </div>
          <div className="post-img">
            <img alt="post-img" src={test1} />
          </div>
        </div>
        <div className="post">
          <h2 className="post-title"> Post title </h2>
          <div className="post-meta">
            <span>Joseph by </span>
            <span>7/12/2020 06:22:00 下午</span>
            <br />
            <span>Tag: </span>
            <span>movie</span>
          </div>
          <div className="post-img">
            <img alt="post-img" src={test1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
