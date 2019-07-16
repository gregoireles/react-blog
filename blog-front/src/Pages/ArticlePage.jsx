import React, { Component } from "react";
import axios from "axios";
import Article from "./../Components/Article";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/${
        this.props.match.params.id
        }`
      )
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { article } = this.state
    console.log(this.state);
    return (
      <div>
        <Article title={article.title} text={article.text} highlight={article.highLight} />
      </div>
    );
  }
}

export default ArticlePage;
