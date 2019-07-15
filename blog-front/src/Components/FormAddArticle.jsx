import React from "react";

const FormAddArticle = ({ img }) => {
  return (
    <div>
      <h2>Add an article</h2>
      <label>
        Title: <input type="text" name="title" />
      </label>
      <label>
        Cover Images: <input type="file" name="imagecover" />
      </label>
      <label>
        Content Images: <input type="file" name="imagecontent" />
      </label>
      <label>
        Highlight: <input type="text" name="highlight" />
      </label>
      <label>
        Text: <input type="text" name="textbox" />
      </label>
      <label>
        Type: <input type="text" name="type" />
      </label>
    </div>
  );
};

export default FormAddArticle;
