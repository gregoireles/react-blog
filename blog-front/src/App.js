import React from "react";
import "./styles/css/main.css";
import NavMain from "./Components/NavMain";
import PageAbout from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ArticlePage from "./Pages/ArticlePage";
import AllArticles from "./Pages/AllArticle";
import VideosPage from "./Pages/VideosPage";
import AddArticle from "./Pages/AddArticle";
import Manage from "./Pages/Manage";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faUserCircle,
  faMapMarkerAlt,
  faSearch,
  faComment,
  faHeart,
  faAngleRight,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
library.add(
  faUserCircle,
  faHeart,
  faMapMarkerAlt,
  faLinkedin,
  faTwitter,
  faSearch,
  faComment,
  faAngleRight,
  faChevronRight
);

function App() {
  return (
    <div className="app-container">
      <NavMain />

      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={PageAbout} />
        <Route path="/articles" component={AllArticles} />
        <Route path="/article/:id" component={ArticlePage} />
        <Route path="/videos" component={VideosPage} />
        <Route path="/add-article" component={AddArticle} />
        <Route path="/manage" component={Manage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
