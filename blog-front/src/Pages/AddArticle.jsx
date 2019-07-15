import React, { Component } from "react";
import FormAddArticle from "../Components/FormAddArticle";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2 className="articles-header-title">Add an article</h2>
        <FormAddArticle />
      </div>
    );
  }
}
