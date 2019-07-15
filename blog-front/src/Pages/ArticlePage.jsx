import React, { Component } from "react";
import axios from "axios";
import Article from "./../Components/Article";


class ArticlePage extends Component {
  state = {
    title: "",
    coverImage: "",
    contentImages: "",
    highLight: "",
    text: ""
  };

  componentDidMount = () => {

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${this._id}`)
    console.log(this._id)
      .then(res => {
        console.log(res)
        this.setState({ articles: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Article data={this.state} />
      </div>
    );
  }
}

export default ArticlePage;

