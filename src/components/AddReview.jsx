import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

function AddReview() {
  const [name, setName] = useState("");
  const [comment, SetComment] = useState("");
  const [rating, setRating] = useState("");

  const [place, setPlace] = useState([]);

  /* Tutorial star rating */
  /* const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined); */
    /* Fim do tutorial */

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleName = (e) => setName(e.target.value);

    const handleComment = (e) => SetComment(e.target.value);

    const handleRating = (e) => setRating(e.target.value);

    const handlePlace = (e) => setPlace(e.target.value);

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
          `${process.env.REACT_APP_API_URL}/articlescreate`,
          body
        );

        console.log(apiCall.data);
        navigate(`/${article.id}`);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
      <div style={styles.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="place">What place to review?</label>
          <select name="place" onClick={handlePlace} required>
            <option>Restaurant</option>
            <option>Tourist Place</option>
            <option>Lodging</option>
          </select>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
  
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={comment}
            cols="125"
            rows="10"
            onChange={handleComment}
          ></textarea>
  
    {/*       <h2>Star Rating test</h2>
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })} */}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div><h1>Teste</h1></div>
      </>
    );
  }


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
};

export default AddReview;
