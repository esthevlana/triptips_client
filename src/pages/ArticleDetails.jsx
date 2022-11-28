import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function ArticleDetails() {
    const [article, setArticle] = useState(null);

    const { id } = useParams();

    const getArticle = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles/${id}`) 
          setArticle(response.data);
          console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getArticle()
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
            </>
        )}
    </div>
  )
}

export default ArticleDetails