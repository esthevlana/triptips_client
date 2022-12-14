import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import { IconContext } from "react-icons";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [favRestaurant, setFavRestaurant] = useState(false);
  const [favRestaurantId, setFavRestaurantId] = useState("");
  const [favTouristPlace, setFavTouristPlace] = useState(false);
  const [favTouristPlaceId, setFavTouristPlaceId] = useState("");
  const [favLodging, setFavLodging] = useState(false);
  const [favLodgingId, setFavLodgingId] = useState("");

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

      //Verificar se o user ja adicionou este artigo aos favs
      if (response.data.allFavs.includes(user._id)) {
        setFavourite(true);
      } else {
        setFavourite(false);
      }

      //Verificar se o user ja tem like
      if (response.data.allLikes.includes(user._id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile-edit/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setCurrentUser(response.data);

      //Check favRestaurant
      if (response.data.favRestaurants.includes(favRestaurantId)) {
        setFavRestaurant(true);
      } else {
        setFavRestaurant(false);
      }

      //Check tourist place
      if (response.data.favTouristPlaces.includes(favTouristPlaceId)) {
        setFavTouristPlace(true);
      } else {
        setFavTouristPlace(false);
      }

      //Check lodging
      if (response.data.favLodgin.includes(favLodgingId)) {
        setFavLodging(true);
      } else {
        setFavLodging(false);
      }

      console.log(favRestaurantId);
    } catch (err) {
      console.log(err);
    }
  };

  const addFavourite = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.get(
        `${process.env.REACT_APP_API_URL}/favourite-article/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  const addLike = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.get(`${process.env.REACT_APP_API_URL}/liked-article/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  const addRestaurant = async (reviewId) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.get(
        `${process.env.REACT_APP_API_URL}/fav-restaurant/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setFavRestaurantId(reviewId);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const addTouristPlace = async (reviewId) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.get(
        `${process.env.REACT_APP_API_URL}/fav-touristplaces/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setFavTouristPlaceId(reviewId);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const addLodging = async (reviewId) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      await axios.get(
        `${process.env.REACT_APP_API_URL}/fav-lodgin/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setFavLodgingId(reviewId);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
    getUser();
  }, [user]);

  return (
    <StyleDetails>
      <div className="articlecontainer">
        {article && (
          <>
            <h1>{article.title}</h1>
            <h5>by {article.creator.username}</h5>
            <p className="location">
              {article.continentName} - {article.countryName}
            </p>
            <p>{article.description}</p>
            <img src={article.imgCountry} />
            <div className="favbuttons">
              <div onClick={addFavourite}>
                {favourite ? (
                  <IconContext.Provider
                    value={{ className: "global-class-name", size: "2em", color: "#6dc993" }}
                  >
                    <div>
                      <AiFillPlusCircle />
                    </div>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{ className: "global-class-name", size: "2em", color: "#6dc993" }}
                  >
                    <div>
                      <AiOutlinePlusCircle />
                    </div>
                  </IconContext.Provider>
                )}
              </div>
              <div onClick={addLike}>
                {liked ? (
                  <IconContext.Provider
                    value={{ className: "global-class-name", size: "2em", color: "#fb3958" }}
                  >
                    <div>
                      <MdOutlineFavorite />
                    </div>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{ className: "global-class-name", size: "2em", color: "#fb3958" }}
                  >
                    <div>
                      <MdOutlineFavoriteBorder />
                    </div>
                  </IconContext.Provider>
                )}
              </div>
            </div>
            <>
              <h5>Places I like the most</h5>
              <div className="reviewcontainer">
                <h4>Where to stay</h4>
                <hr />
                {article.lodgin.map((review) => {
                  return (
                    <div>
                      <h5>{review.name}</h5>
                      <p>{review.comment}</p>
                      <p>{review.rating}</p>
                      <div onClick={() => addLodging(review._id)}>
                        {favLodging ? (
                          <p>
                            <AiFillPlusCircle />
                          </p>
                        ) : (
                          <p>
                            <AiOutlinePlusCircle />
                          </p>
                        )}
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="reviewcontainer">
                <h4>Where to eat</h4>
                <hr />
                {article.restaurants.map((review) => {
                  return (
                    <div>
                      <h5>{review.name}</h5>
                      <p>{review.comment}</p>
                      <p>{review.rating}</p>
                      <div onClick={() => addRestaurant(review._id)}>
                        {favRestaurant ? (
                          <p>
                            <AiFillPlusCircle />
                          </p>
                        ) : (
                          <p>
                            <AiOutlinePlusCircle />
                          </p>
                        )}
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="reviewcontainer">
                <h4>Where to visit</h4>
                <hr />
                {article.touristPlaces.map((review) => {
                  return (
                    <div>
                      <h5>{review.name}</h5>
                      <p>{review.comment}</p>
                      <p>Rating: {review.rating}</p>
                      <div onClick={() => addTouristPlace(review._id)}>
                        {favTouristPlace ? (
                          <p>
                            <AiFillPlusCircle />
                          </p>
                        ) : (
                          <p>
                            <AiOutlinePlusCircle />
                          </p>
                        )}
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </>
            <Link to={`/articles/edit/${article._id}`}>Edit your article</Link>
          </>
        )}
      </div>
    </StyleDetails>
  );
}

export const StyleDetails = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  .articlecontainer {
    background-color: white;
    max-width: 50vw;
    padding: 20px;
    text-align: justify;
    border-radius: 9px;
  }

  .location {
    color: grey;
    font-size: 0.9em;
  }

  .favbuttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
  }

  .reviewcontainer {
    background-color: rgba(169, 176, 98, 0.6);
    padding: 9px;
    margin: 4px;
  }

  img {
    max-width: 47vw;
  }
`;

export default ArticleDetails;
