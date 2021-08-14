import React from "react";

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.props.pathRecorder(true);
  }
  
  render() {
    return (
      <div>
        <h1> Admin here </h1>
      </div>
    );
  }
}

export default Admin;