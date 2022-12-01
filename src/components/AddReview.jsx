import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import {StyledArticleForm} from '../components/AddArticle';

function AddReview(props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [article, setArticle] = useState(null);
  const [rating, setRating] = useState(0);

  const [place, setPlace] = useState("Restaurant");

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const handleName = (e) => setName(e.target.value);

  const handleComment = (e) => setComment(e.target.value);

  const handleRating = (e) => setRating(e.target.value);

  const handlePlace = (e) => setPlace(e.target.value);

  //get Article (if they exist)
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

  useEffect(() => {
    getArticle();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        comment,
        rating,
        place,
      };
      console.log(body);

      const apiCall = await axios.post(
        `${process.env.REACT_APP_API_URL}/reviewcreate/${id}`,
        body
      );

      setName("");
      setComment("");
      setRating(0);

      console.log(apiCall.data);
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StyledArticleForm>
        <form onSubmit={handleSubmit}>
          <label htmlFor="place">What place to review?</label>
          <select name="place" onClick={handlePlace} required>
            <option value="Restaurant">Restaurant</option>
            <option value="Tourist Place">Tourist Place</option>
            <option value="Lodging">Lodging</option>
          </select>
          <label htmlFor="name"></label>
          <input type="text" name="name" value={name} onChange={handleName} placeholder="Name"/>

          <label htmlFor="comment"></label>
          <textarea
            name="comment"
            value={comment}
            cols="100"
            rows="10"
            onChange={handleComment}
            placeholder="Your comment"
          ></textarea>

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            min={0}
            max={5}
            onChange={handleRating}
          />

          <button type="submit">Send</button>
        <Link to={`/articles/${id}`}>See your post</Link>
        </form>
      </StyledArticleForm>
      <div>
        {article && (
          <div>
            <h3>Reviews for article : {article.title}</h3>
            {article.lodgin.map((review) => {
              return (
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.comment}</p>
                  <p>{review.rating}</p>
                </div>
              );
            })}
            {article.restaurants.map((review) => {
              return (
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.comment}</p>
                  <p>{review.rating}</p>
                </div>
              );
            })}
            {article.touristPlaces.map((review) => {
              return (
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.comment}</p>
                  <p>{review.rating}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}



export default AddReview;
