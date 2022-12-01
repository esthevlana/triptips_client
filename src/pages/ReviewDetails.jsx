/* import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

function ReviewDetails() {
  const [review, setReview] = useState(null);
  const [favArticles, setFavArticles] = useState(false);
  const [favTouristPlaces, setFavTouristPlaces] = useState(false);
  const [favLodgin, setFavLodgin] = useState(false);
  const [favRestaurants, setFavRestaurants] = useState(false);
  const {id} = useParams();

  const getReview = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/review/${id}`,
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

  return <div>ReviewDetails</div>;
}

export default ReviewDetails; */
