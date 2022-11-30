import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import service from "../service/service";

function Profile() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [thisUser, setThisUser] = useState(null);

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
    <div>
      <br></br>
      {thisUser && (
        <>
          <h1>Welcome, {thisUser.username}</h1>
          <h1>{thisUser.email}</h1>
          <img src={thisUser.imgUser} alt="profilepic" />

          <Link to={`/profile-edit/${user._id}`}> Edit Profile </Link>
        </>
      )}
    </div>
  );
}

export default Profile;
