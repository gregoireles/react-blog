import React, { Component } from "react";
import axios from "axios";


export default class FormAddArticle extends Component {
  state = {
    title: "",
    highlight: "",
    imagecover: "",
    imagecontent: "",
    textbox: "",
  };

  addArticle = () => {
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/articles`, this.state)
      .then(apiRes => {
        console.log(apiRes.data)
      })
      .catch(apiErr => {
        console.log(apiErr);
      });
  };
 
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`)
      .then(apiRes => {
        this.setState({ articles: apiRes.data });
      })
      .catch(apiErr => {console.log(apiErr)});
  };

  handleChange = evt => {
    console.log(evt.target.value)
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    console.log(this.state)
    evt.preventDefault();
    this.addArticle();
  };

  render() {
    return (
    <div>
        <h2>Add an article</h2>
        <form  onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>
          Title: <input type="text" name="title" onChange={this.handleChange}/>
        </label>
        <label>
          Cover Images: <input type="file" name="coverImages" />
        </label>
        <label>
          Content Images: <input type="file" name="imagecontent" />
        </label>
        <label>
          Highlight: <input type="text" name="highLight" />
        </label>
        <label>
          Text: <input type="text" name="text" />
        </label>
      {/* <label>
        Type: <input type="text" name="type" />
      </label> */}
        <button>Create article</button>
      </form>
    </div>)
  }
}
