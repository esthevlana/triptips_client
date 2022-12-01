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
      <br></br>
      <div className="userinfo">
        {thisUser && (
          <>
            <h1>Welcome, {thisUser.username}</h1>
            <Link to={`/profile-edit/${user._id}`}> Edit Profile </Link>
            <img src={thisUser.imgUser} alt="profilepic" />
          </>
        )}
        <h4>My favourite articles</h4>
        {thisUser &&
          thisUser.favArticles &&
          thisUser.favArticles.map((article) => {
            return <p>{article.title}</p>;
          })}
      </div>
    </StyledProfile>
  );
}

const StyledProfile = styled.div`
  color: white;

  .userinfo {
    background-color: grey;
    max-width: 33vw;
    border-radius: 3px;
    padding: 15px;
    margin: 20px;
    font-size: 1em;
  }

  img {
    width: 10vw;
  }
`;

export default Profile;
