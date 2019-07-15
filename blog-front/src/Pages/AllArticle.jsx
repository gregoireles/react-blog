import React, { Component } from 'react';
import SearchBar from './../Components/SearchBar';
import GridArticles from '../Components/GridArticles';
import axios from 'axios'

export default class AllArticles extends Component {
  state = {
    articles: []
  }


  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`)
      .then(res => {
        this.setState({ articles: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    const { articles } = this.state
    return (<>
      <header className="articles-header">
        <h2 className="articles-header-title">Browse and discover your new adventure...</h2>
        <SearchBar />
      </header>
      <div className="wrapper articles-grid">
        <GridArticles data={articles} />
      </div>
    </>);
  }
}

