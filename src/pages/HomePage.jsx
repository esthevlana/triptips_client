import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { ImLocation2 } from "react-icons/im";
import BootstrapCarousel from "../components/BootstrapCarousel";

function HomePage() {
  const [article, setArticle] = useState([]);

  const { id } = useParams();

  const getArticle = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
      const articleFromApi = response.data;

      setArticle(articleFromApi);
      console.log(articleFromApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <div className="overlay">
        <div className="containerImage"></div>
      </div>
      <StyledSection>
        <h2>Popular Destinations</h2>
        <div className="bgcarousel">
        <BootstrapCarousel />
        </div>

        <h2>
          <ImLocation2 /> Look where people have been
        </h2>
        <div className="bgcarousel">
        <div className="ArticleCardSection">
          {article.map((article) => {
            return (
              <Link to={`/articles/${article._id}`}>
                {" "}
                <ArticleCard article={article} />{" "}
              </Link>
            );
          })}
        </div>
        </div>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  img {
    width: 23vw;
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 50px;
    color: #5d5b5b;
  }

  h3 {
    margin: 50px 0px 50px 0px;
    text-align: left;
    margin-left: 15px;
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    color: #5d5b5b;
  }
`;

export default HomePage;
