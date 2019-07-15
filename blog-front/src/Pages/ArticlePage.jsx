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
    console.log(this.state)
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/article/${this.data.id}`)
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
        <Article />
      </div>
    );
  }
}

export default ArticlePage;

