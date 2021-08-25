import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function oldLinkToNew(text, type) {
  let path = "/post/";
  let temp = "";
  for(let i=0; i<type.length-5; i++) {
    temp += type[i];
  }
  path += (temp + "/");
  path += text[text.length-1];
  return path;
}

async function fetchPosts(type, func) {
  await fetch("http://localhost:5000/" + type)
    .then((data) => {
      return data.text();
    })
    .then((data) => {
      let temp = JSON.parse(data);
      func(temp);
    });
}

function Postbox(props) {
  const posts = props.postItems;
  const list = posts.map((item) => (
    <div className="post" key={item.id}>
      <div className="post-header">
        <h2 className="post-title">{item.title}</h2>
        <Link to={oldLinkToNew(item.postLink, props.type)}>
          <i className="fas fa-link"></i>
        </Link>
      </div>
      <div className="post-meta">
        <span>Joseph by </span>
        <span>{item.date}</span>
      </div>
      <div className="post-img">
        <img alt="post-img" src={item.img} />
      </div>
    </div>
  ));
  return <div className="post-container">{list}</div>;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.curPathRecord(false);
    this.state = {
      isLoadDown: false,
      postList: [],
      type: "",
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    fetchPosts(this.props.data, this.getData);
    this.setState({
      isLoadDown: true,
      type: this.props.data,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      fetchPosts(this.props.data, this.getData);
      this.setState({
        type: this.props.data,
      });
    }
  }

  getData(obj) {
    this.setState({ postList: obj });
  }

  render() {
    return (
      <div>
        {this.state.isLoadDown === true ? (
          <Postbox postItems={this.state.postList} type={this.state.type} />
        ) : (
          <div>{this.state.type}</div>
        )}
      </div>
    );
  }
}

export default Home;
