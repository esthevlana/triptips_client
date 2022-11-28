import { useState, useEffect, useContext } from "react";
import axios from "axios";
import service from "../service/service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function AddArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [continentName, setContinentName] = useState("");
  const [countryName, setCountryName] = useState("");

  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTitle = (e) => setTitle(e.target.value); 

  const handleDescription = (e) => setDescription(e.target.value);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        setImageUrl(response.fileUrl);
      })

      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleContinentName = (e) => setContinentName(e.target.value);

  const handleCountryName = (e) => setCountryName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title,
        description,
        imageUrl,
        continentName,
        countryName,
        creator: user._id,
      };

      console.log(body);

      const apiCall = await axios.post(
        `${process.env.REACT_APP_API_URL}/articlescreate`,
        body
      ); //the second argument is what you want to send to the backend
      //to clear the inputs of the form after the user click on submit:

      console.log(apiCall.data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //GET ALL CONTINETS
  const getContinents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/continents`
      );
      setContinents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContinents();
  }, []);

  //GET COUNTRIES FROM SELECTED CONTINENT
  const getCountries = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/countries/${continentName}`
      );
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, [continentName]);

  return (
    <div className="AddProject">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          cols="30"
          rows="10"
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="imageUrl">Profile Photo</label>
        <input type="file" name="imageUrl" onChange={handleFileUpload} />

        <select name="continentName" onClick={handleContinentName}>
          {continents.map((conti) => {
            return (
              <option value={conti.continent} key={conti.continent}>
                {conti.continent}
              </option>
            );
          })}
        </select>

        <select name="countryName" onClick={handleCountryName}>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default AddArticle;
