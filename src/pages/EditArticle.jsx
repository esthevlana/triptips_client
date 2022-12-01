import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import service from "../service/service";

function EditArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [continentName, setContinentName] = useState("");
  const [countryName, setCountryName] = useState("");

  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

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

  const getArticle = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles/${id}`
      );
      setTitle(response.data.title);
      setDescription(response.data.description);
      setImageUrl(response.data.imageUrl);
      setContinentName(response.data.continentName);
      setCountryName(response.data.countryName);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/articles/edit/${id}`, {
        title,
        description,
        imageUrl,
        continentName,
        countryName,
      });

      setTitle("");
      setDescription("");
      setImageUrl("");
      setContinentName("");
      setCountryName("");

      navigate(`/articles/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/article/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Edit your article</h3>
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

        <label htmlFor="imageUrl">Upload a photo</label>
        <input type="file" name="imageUrl" value={imageUrl} onChange={handleFileUpload} />

        <select name="continentName" value={continentName} onClick={handleContinentName}>
          {continents.map((conti) => {
            return (
              <option value={conti.continent} key={conti.continent}>
                {conti.continent}
              </option>
            );
          })}
        </select>

        <select name="countryName" value={countryName} onClick={handleCountryName}>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>

        <button type="submit">Edit</button>
      </form>

      <button onClick={deleteArticle}>Delete your article</button>
    </div>
  );
}

export default EditArticle;
