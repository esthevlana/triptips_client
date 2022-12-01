import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article } = props;

  return (
    <StyledCard className="ArticleCard">
      <div>
        <div>
          <p>
            {article.countryName} - {article.continentName}
          </p>
        </div>
        <div>
          <img src={article.imgCountry} />
        </div>
        <div>
          <h4>{article.title}</h4>
        </div>
        <div>
          <p>{article.user}</p>
        </div>
        <div>
          <p className="text">{article.description}</p>
        </div>
        <p className="readMore">Read more</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: whitesmoke;
  border: 1px solid lightgrey;
  border-radius: 8px;
  width: 30vw;
  padding: 10px;
  margin-bottom: 3vh;
  text-align: justify;

  img {
    width: 100%;
    max-height: 50%;
  }

  h4 {
    padding: 10px 0px;
  }

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  .readMore {
    text-decoration: underline;
  }
`;

export default ArticleCard;
