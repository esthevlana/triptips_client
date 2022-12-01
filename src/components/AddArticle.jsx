import { useState, useEffect, useContext } from "react";
import axios from "axios";
import service from "../service/service";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import styled from "styled-components";

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

  const { id } = useParams();

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

      navigate(`/review/create/${apiCall.data._id}`);
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
      setContinentName("Oceania");
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
    <StyledArticleForm className="container">
      <form onSubmit={handleSubmit} className="loginform">
            <h3>How was your experience?</h3>
            <label htmlFor="title"></label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
              placeholder="Title"
            />

            <label htmlFor="description"></label>
            <textarea
              name="description"
              value={description}
              placeholder="Tell us everything"
              cols="125"
              rows="10"
              onChange={handleDescription}
            ></textarea>

            <label htmlFor="imageUrl">Select a picture</label>
            <input type="file" name="imageUrl" onChange={handleFileUpload} />

            <label htmlFor="continentName">Select the Continente</label>
            <select name="continentName" onClick={handleContinentName}>
              {continents.map((conti) => {
                return (
                  <option
                    value={conti.continent}
                    key={conti.continent}
                    selected={continentName == conti.continent}
                  >
                    {conti.continent}
                  </option>
                );
              })}
            </select>

            <label htmlFor="continentName">Select the Country</label>  
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
    </StyledArticleForm>
  );
}

export const StyledArticleForm = styled.section`

input[type=text], select, textarea {
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 20px;
  width: 80vw;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-top: 15px;
}

`

export default AddArticle;
