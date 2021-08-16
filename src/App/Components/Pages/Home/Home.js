import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import test1 from "./3.jpg";
import test2 from "./2.jpg";
import test3 from "./1.jpg";

// Home & Movie & life using the same page, but distinguish by URL parameters. { /:id }

// function filter the post class

function Postbox(props) {
  const posts = props.postItems;
  const list = posts.map((item) => (
    <div className="post" key={item.photo}>
      <div className="post-header">
        <h2 className="post-title">{item.title}</h2>
        <Link to={item.path}>
          <i className="fas fa-link"></i>
        </Link>
      </div>
      <div className="post-meta">
        <span>Joseph by </span>
        <span>{item.meta}</span>
        <br />
        <span>Tag: </span>
        <span>{item.tag}</span>
      </div>
      <div className="post-img">
        <img alt="post-img" src={item.photo} />
      </div>
    </div>
  ));
  return <div className="post-container">{list}</div>;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.pathRecorder(false);
    this.state = {
      postList: [
        {
          title: "First Post",
          meta: "7/12/2020 06:22:00 下午",
          tag: "Life",
          photo: test2,
          path: "post/1",
        },
        {
          title: "YoYoYo",
          meta: "7/13/2020 06:22:00 下午",
          tag: "Life",
          photo: test1,
          path: "post/2",
        },
        {
          title: "長頸鹿",
          meta: "7/14/2020 06:22:00 下午",
          tag: "Movie",
          photo: test3,
          path: "post/3",
        },
      ],
    };
  }

  render() {
    return <Postbox postItems={this.state.postList} />;
  }
}

export default Home;
