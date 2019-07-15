import React from 'react';


const ArticleCard = ({ img, data }) => {

  return (
    data.map((card) => {
      return (
        <div key={card._id} className="article-card-container" style={{ backgroundImage: 'url(' + img + ')' }}>
          <div className="card-infos">
            <h4 className="card-title">{card.title}</h4>
            <p className="card-city">{card.city}</p>
          </div>
        </div>)
    })
  )
}



export default ArticleCard;

