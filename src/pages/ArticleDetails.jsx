import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../contexts/auth.context'
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { MdOutlineFavorite } from "react-icons/md"

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const { id } = useParams();

  const getArticle = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setArticle(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addFavourite = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      await axios.get(`${process.env.REACT_APP_API_URL}/favourite-article/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p>{article.imageUrl}</p>
          <p>{article.continentName}</p>
          <p>{article.countryName}</p>
          <button onClick={addFavourite}>{isFavourite ? <p><MdOutlineFavoriteBorder /></p> : <p><MdOutlineFavorite /></p>}</button>
          <Link to={`/articles/edit/${article._id}`}>Edit your article</Link>
        </>
      )}
    </div>
  );
}

export default ArticleDetails;
