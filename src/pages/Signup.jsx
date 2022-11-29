import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";



function Signup(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {username, email, password});
        navigate("/login")

    } catch(error){
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription) 
    }
  };

  return (
    <StyleDiv>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="loginform">
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to='/login'> Login</Link>
    </StyleDiv>
  );
}

export const StyleDiv = styled.div`

.loginform {
  background-color: #EFEFEF;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 50px 0;
  padding-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

form {
  margin: 20px auto;
  text-align: center;
  width: 80vw;
}

form label {
  color: #989595;
  display: inline-block;
  margin-bottom: 20px;
  text-align: left;
  width: 70%;
  line-height: 15px;
  font-size: 15px;
  font-weight: bold;
}

form input,
form button {
  box-sizing: border-box;
  font-size: 10px;
  outline: 0;
  padding: 4px;
  width: 70%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 0px;
}

form button {
  background: #a566e0;
  border: 1px solid #a566e0;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: bolder;
  padding: 8px 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s ease background;
  width: 25vw;
}

form button:hover {
  background: #fff;
  color: #a566e0;
  transition: 0.3s ease background;
}

form i {
  margin-left: -30px;
  cursor: pointer;
}

form i:hover {
  color: #C3D43C;
}
  
`

export default Signup;