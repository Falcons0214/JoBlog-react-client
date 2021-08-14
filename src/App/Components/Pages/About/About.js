import React from "react";
import "./About.css";
import headPhoto from "./head.png";

class About extends React.Component {
  render() {
    return (
      <div className="bio-container">
        <div className="photo-section">
          <img alt="img" src={headPhoto} />
        </div>
        <div className="text-section">
          <p>
            <b>Hi ! I'm Jospeh.</b>
            <br />
            <br />
            這裡分享我所學以及生活的點點滴滴
          </p>
        </div>
        <div className="icon-container">
          <a className="about-f" href="https://www.facebook.com/profile.php?id=100006462815125">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="about-g" href="https://github.com/">
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="https://jeffery12366yahoo-com.medium.com/">
            <i className="fab fa-medium-m"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
