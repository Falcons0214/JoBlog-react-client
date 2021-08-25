import React from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

async function fetchData(type, id, func) {
  let path = ("http://localhost:5000/" + "post/" + type + "/" + id);
  await fetch(path).then( (data)=>{
    return data.text();
  }).then( (data) => {
    let temp = JSON.parse(data);
    func(temp);
  } );
}

function Textbox(props) {
  const items = props.textItems;
  const item = items.map((item) => (
    <div className="text-box" key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <div className="post-photo-container">
        <img alt="img" src={item.img} />
      </div>  
    </div>
  ));
  return <div className="post-text-container">{item}</div>;
}

class Postbody extends React.Component {
  constructor(props) {
    super(props);
    this.props.curPathRecord(true);
    this.state = {
      isLoadDone: false,
      title: undefined,
      tag: undefined,
      date: undefined,
      texts: [],
    };
    this.isPageLoadDone = this.isPageLoadDone.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    fetchData(this.props.type, this.props.postId, this.getData);
    this.setState(
      { isLoadDone: true }
    );
  }

  getData(obj) {
    this.setState({
      title: obj.title,
      tag: obj.tag,
      date: obj.date,
      texts: obj.texts,
    });
  }

  isPageLoadDone() {
    return this.state.isLoadDone === true ? "page-load-done" : "";
  }

  render() {
    return (
      <div className="postext-container">
        {this.state.isLoadDone ? (
          <div>
            <div className="postext-title">
              <h2> {this.state.title} </h2>
              <span> Joseph by {this.state.date} </span>
            </div>
            <div className="post-tag"> Tag: {this.state.tag} </div>
            <div className="content-container">
              <Textbox textItems={this.state.texts} />
            </div>
          </div>
        ) : (
          <div className="post-loading">
            <h1 className={this.isPageLoadDone()}>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}

function Post(props) {
  let { type, id } = useParams();
  return <Postbody curPathRecord={props.curPathRecord} type={type} postId={id} />;
}

export default Post;
