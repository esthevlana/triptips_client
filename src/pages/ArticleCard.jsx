import React from "react";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;
  return (
    <div>
      <div><h4>{article.countryName}</h4>
      <br/><h4>{article.continentName}</h4></div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
}

export default ArticleCard;
