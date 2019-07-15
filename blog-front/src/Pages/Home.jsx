import React, { Component } from 'react'
import axios from "axios"
// import HeaderVideo from "./../Components/HeaderVideo"
// import { Link } from "react-router-dom"
import GridArticles from './../Components/GridArticles';
import PageTitle from './../Components/PageTitle';
// import Cta from './../Components/Cta'

export default class Home extends Component {
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
    return (
      <div className="wrapper">
        <PageTitle 
        title="Browse through my articles and learn about my adventure" 
        subTitle=" Etiam eu blandit lorem. Morbi consequat eu quam in tempus. 
        Etiam auctor, magna sed tempus venenatis, arcu ante malesuada lorem, a hendrerit ex massa eu justo." />
        <GridArticles data={this.state.articles} />
      </div>
    )
  }
}