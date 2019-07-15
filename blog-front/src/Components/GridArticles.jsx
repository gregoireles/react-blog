import React from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';

const GridArticles = ({ data }) => {
  const imgLink = "https://res.cloudinary.com/dfbmzsyx7/image/upload/v1563117252/There_app/ethan-sexton-LsWAp-7lRpg-unsplash_qrpzsi.jpg"
  return (
    <div className="grid-articles-container">
      <div className="grid-articles">
        {data.map((card, i) => {
          return (
            <Link to={`/article/${card._id}`}><ArticleCard img={imgLink} title={card.title} city={card.city} key={i} /></Link>);
        })}

      </div>
    </div>
  );
}

export default GridArticles;