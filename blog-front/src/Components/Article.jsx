import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Article = () => {
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
        <h2 className="article-title">This is the title for the article</h2>
      </div>
      <div className="article-text">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor nisi, ullamcorper et dapibus vitae, cursus a tellus. Proin egestas, nunc sit amet consequat imperdiet, metus ante accumsan est, non faucibus ex justo vitae leo. Fusce quis ex eleifend, dapibus dolor at, posuere mauris. Duis pellentesque aliquet ex, faucibus luctus nulla sagittis a. Quisque iaculis neque sed volutpat dignissim. Etiam fringilla orci lorem, ac aliquam mauris suscipit sed.

           <br />
          <p className="highlight">“Provident atque, aperiam assumenda tempora est hic! Saepe, harum.Etiam lacinia, dui eleifend vehicula pulvinar”</p>

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