import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1> Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
