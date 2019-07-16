import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Article = ({ title, text, highlight }) => {
  return (
    <article className="wrapper article-page">
      <div className="article-images">
        <div className="img"><img src="" alt="" /></div>
        <div className="img"><img src="" alt="" /></div>
        <div className="img"><img src="" alt="" /></div>
      </div>
      <div className="article-heart">
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        <p className="count">23</p>
      </div>
      <div className="article-title-container">
        <p className="article-over-title">Toronto</p>
        <h2 className="article-title">{title}</h2>
      </div>
      <div className="article-text">
        <div className="text">
          {text}

          <br />
          <p className="highlight">{highlight}</p>

          Morbi consequat eu quam in tempus. Etiam auctor, magna sed tempus venenatis, arcu ante malesuada lorem, a hendrerit ex massa eu justo. Fusce varius malesuada diam eget sagittis. Phasellus vehicula justo nec sem iaculis, id dignissim urna placerat.
          <br />

          Cras quis bibendum tortor. Praesent ullamcorper iaculis nulla, quis laoreet nulla. Etiam lacinia, dui eleifend vehicula pulvinar, mi lorem ultrices neque, eu suscipit diam nibh maximus magna. Cras metus augue, cursus vel ex id, blandit pretium justo. In hac habitasse platea dictumst.
           {/* <p className="highlight"> “Etiam lacinia, dui eleifend vehicula pulvinar, mi lorem ultrices neque. Etiam lacinia, dui eleifend vehicula pulvinar”</p> */}
        </div>

      </div>


    </article>
  );
}

export default Article;