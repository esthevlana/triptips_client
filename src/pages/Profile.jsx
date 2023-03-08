import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Profile() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [thisUser, setThisUser] = useState(null);
  const [favArticles, setFavArticles] = useState("");
  const [favTouristPlaces, setFavTouristPlaces] = useState("");
  const [favLodgin, setFavLodgin] = useState("");
  const [favRestaurants, setFavRestaurants] = useState("");

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response.data);
      setThisUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(user);

  return (
    <StyledProfile>
      <br />
      <br />
      <div className="userContainer">
        
        <div className="userOverlay">
            <div className="headerContainer"></div>
        </div>

        <div className="userinfo">
          {thisUser && (
            <>
              <div className="userInfo-img">
                <img src={thisUser.imgUser} alt="profilepic" />
              </div>
              <div className="userInfo-text">
                <h6>Welcome, {thisUser.username}</h6>
                <div className="userInfo-edit">
                <Link to={`/profile-edit/${user._id}`}>Update</Link>
              </div>
              </div>
            </>
          )}
        </div>
        <div className="favInfo">
          <div className="favboxes">
            <h5>Favourited articles</h5>
            {thisUser &&
              thisUser.favArticles &&
              thisUser.favArticles.map((article) => {
                return (
                  <Link to={`/articles/${article._id}`}>
                    <p>{article.title}</p>
                  </Link>
                );
              })}
          </div>
    
          <div className="favboxes">
            <h5>Places to eat</h5>
            {thisUser &&
              thisUser.favRestaurants &&
              thisUser.favRestaurants.map((restaurants) => {
                return <p>{restaurants.name}</p>;
              })}
          </div>

          <div className="favboxes">
            <h5>Places to visit</h5>
            {thisUser &&
              thisUser.favTouristPlaces &&
              thisUser.favTouristPlaces.map((tourist) => {
                return <p>{tourist.name}</p>;
              })}
          </div>

          <div className="favboxes">
            <h5>Places to sleep</h5>
            {thisUser &&
              thisUser.favLodgin &&
              thisUser.favLodgin.map((lodging) => {
                return <p>{lodging.name}</p>;
              })}
          </div>
          </div>
        </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  .userContainer {
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 80vw;
    margin: 0 auto;
  }

  .headerContainer {
    height: 50vh;
    width: 80vw;
    background-image: url(https://res.cloudinary.com/dymq1r3y9/image/upload/v1678287654/movie-gallery/userheaderimg_gb26ba.jpg);
    background-size: cover;
    max-width: 100vw;
  }

  .userOverlay {
    width: 100%;
    height: 50vh;
    opacity: 0.7;
  }

  .userinfo {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1em;
    position: relative;
    top: -6rem;
  }

  .userInfo-img img {
    width: 13vw;
  }

  .userInfo-text h6 {
    font-size: 2rem;
    padding-top: 2rem;
  }

  .userInfo-edit {
    background-color: rgba(6, 0, 0, 0.5);
    max-width: 100%;
    width: 6vw;
    height: auto;
    transition: transform 0.2s;
    max-width: 100%;
    margin: 0 auto;
    display: inline-block;
    word-break: break-all;
  }

  .userInfo-edit a {
    color: white;
    text-align: center;
    font-size: 0.9rem;
  }

  .userInfo-edit:hover {
    transform: scale(1.05);
    background-color: rgba(6, 0, 0, 0.5);
  }

  h5 {
    font-weight: bolder;
  }

  .favInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    position: relative;
    top: -5rem;
  }

  .favboxes {
    width: 33vw;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 10px;
    padding: 15px;
    border-radius: 12px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default Profile;
