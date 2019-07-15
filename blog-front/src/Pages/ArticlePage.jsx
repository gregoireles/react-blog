import React, { Component } from "react";
// import axios from "axios";
import Article from "./../Components/Article";

class ArticlePage extends Component {
  state = {
    title: "",
    coverImage: "",
    contentImages: "",
    highLight: "",
    text: ""
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
