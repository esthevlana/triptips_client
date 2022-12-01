import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import Carousel from "react-bootstrap/Carousel";
import { ImLocation2 } from "react-icons/im";

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
      <StyledSection>
        <div className="overlay"><div className="container"></div></div>
        <h2>Popular Destinations</h2>
        <Carousel />

        <SearchBar placeholder="Look for a country" />

        <h3>
          <ImLocation2 /> Look where people have been
        </h3>
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
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  img {
    width: 23vw;
  }

  h2 {
    margin-top: 70px;
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

  .container {
    height: 70vh;
    width: 100vw;
    background-image: url(https://res.cloudinary.com/dymq1r3y9/image/upload/v1669844141/movie-gallery/giorgia-doglioni-G2zjqUDkYSQ-unsplash_lrvctz.jpg);
    background-size: cover;
  }

  .overlay{
    width: 100%;
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export default HomePage;
