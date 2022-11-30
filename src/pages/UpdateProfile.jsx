import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import service from "../service/service";
import { AuthContext } from "../contexts/auth.context";

function UpdateProfile() {
  const [username, setUsername] = useState("");
  const { user, storeToken, authenticateUser } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile-edit/${id}`
      );

      setUsername(response.data.username);
      console.log(response.data);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUsername = (e) => setUsername(e.target.value);
  useEffect(() => {
    getProfile();
  }, []);

  const handleFileUpload = (e) => {
         const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        service
          .uploadImage(uploadData)
          .then(response => {
            setImageUrl(response.fileUrl);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/profile-edit/${id}`,
        {
          username,
           imageUrl,
        },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
        storeToken(response.data.authToken)
        authenticateUser();
      setUsername("");
      setImageUrl("");

      navigate(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditProfilePage">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
          placeholder={user.username}
        />

        <label htmlFor='imageUrl'>Profile Photo</label>
            <input type='file' name='imageUrl'  onChange={handleFileUpload}/>

        <button type="submit">Edit Profile</button>
      </form>
    </div>
  );
}

export default UpdateProfile;
