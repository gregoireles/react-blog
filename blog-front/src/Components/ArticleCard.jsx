import React from 'react';


const ArticleCard = ({ img, city, title }) => {

  return (


    <div className="article-card-container" style={{ backgroundImage: 'url(' + img + ')' }}>
      <div className="card-infos">
        <h4 className="card-title">{title}</h4>
        <p className="card-city">{city}</p>
      </div>
    </div>)


}



export default ArticleCard;

