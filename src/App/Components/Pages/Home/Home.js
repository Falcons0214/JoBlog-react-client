import React from "react";
import { Link, useParams } from "react-router-dom"; 
import "./Home.css";
import test1 from "./3.jpg";

// Home & Movie & life using the same page, but distinguish by URL parameters. { /:id }

function Path() { 
  let { id } = useParams();
  if(id) {
    return <h1> {id} </h1>;
  }else if(id === undefined){
    return <h1> ?? </h1>;
  }
}

class Home extends React.Component {

  render() {
    return (
      <div className="post-container">
        {/* testing
        <Path /> */}
        <div className="post">
          <h2 className="post-title"> Post title </h2>
          <div className="post-meta">
            some metadata
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
 