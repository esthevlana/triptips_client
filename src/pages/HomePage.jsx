import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const [article, setArticle] = useState([]);

  const { id } = useParams();

  const getArticle = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/`
      );
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
      {article.map(article => {
        return <ArticleCard article={article} />
      })}
    </>
  );
}

export default HomePage;
