import React, { Component } from "react";


export default class FormAddArticle extends Component {
  state = {
    title: "",
    highlight: "",
    textbox: "",
  };

  handleChange = evt => {
    console.log(evt.target.value)
    const { title, highlight, textbox } = evt.target;
    this.setState({ title: evt.target.value, highlight: evt.target.value, textbox: evt.target.value });
  };

  handleSubmit = evt => {
    console.log(this.state)
    evt.preventDefault();
  };

  render() {
    return (
    <div>
        <h2>Add an article</h2>
        <form action="" onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Title: <input type="text" name="title"/>
        </label>
        <label>
          Cover Images: <input type="file" name="imagecover" />
        </label>
        <label>
          Content Images: <input type="file" name="imagecontent" />
        </label>
        <label>
          Highlight: <input type="text" name="highlight" />
        </label>
        <label>
          Text: <input type="text" name="textbox" />
        </label>
      {/* <label>
        Type: <input type="text" name="type" />
      </label> */}
        <button>Create article</button>
      </form>
    </div>)
  }
}
