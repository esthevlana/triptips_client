import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import Airplane from "../assets/airplaneline.png";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

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
      <h1>
        Search for the next best trip
        <br /> of your life
      </h1>

      <StyledSection>
        <img src={Airplane} />
      </StyledSection>

      <SearchBar placeholder="Look for a country" />

      {article.map((article) => {
        return (
          <Link to={`/articles/${article._id}`}>
            {" "}
            <ArticleCard article={article} />{" "}
          </Link>
        );
      })}
    </>
  );
}

const StyledSection = styled.section`
  img {
    width: 23vw;
  }
`;

export default HomePage;
