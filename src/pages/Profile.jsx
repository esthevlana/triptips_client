import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import service from "../service/service";

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
      <div className="userinfo">
        {thisUser && (
          <>
            <img src={thisUser.imgUser} alt="profilepic" />
            <h6>Welcome,</h6>
            <h4>{thisUser.username}</h4>
            <Link to={`/profile-edit/${user._id}`}> Edit Profile </Link>
          </>
        )}
        <div className="favInfo">
          <div className="favboxes">
            <h5>Favourited articles</h5>
            {thisUser &&
              thisUser.favArticles &&
              thisUser.favArticles.map((article) => {
                return <Link to={`/articles/${article._id}`}><p>{article.title}</p></Link>;
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
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 5%;

  .userinfo {
    background-color: rgba(255, 255, 255, 0.3);
    width: 70vw;
    border-radius: 3px;
    padding: 15px 0px 0px 0px;
    margin: 20px;
    font-size: 1em;
  }

  img {
    width: 15vw;
    margin-bottom: 3%;
  }

  h5 {
    font-weight: bolder;
  }

  .favInfo {
    background-color: olive;
    border: 1px solid black;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 20px;
  }

  .favboxes {
    width: 25vw;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 10px;
    padding: 15px;
    border-radius: 12px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: white;
  }
`;

export default Profile;
