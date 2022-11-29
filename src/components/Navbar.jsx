import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import styled from "styled-components";

function Navbar() {

    const { loggedIn, user, logout } = useContext(AuthContext);

    return (
    <StyleNavBar>
      <Link to="/">
        <p>Home</p>
      </Link>
 
      {loggedIn && (
        <>
          <Link to="/profile">
            <p>Profile</p>
          </Link>

          <Link to="/addarticle">
            <p>How was your trip?</p>
          </Link>

          <Link to="/">
            <p>Community</p>
          </Link> {/* procurar como fazer um menu dropdown linkando à base de dados */}

          <button onClick={logout}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </>
      )}
    </StyleNavBar>
  );
}

const StyleNavBar = styled.nav`
height: 7vh;
background-color: #676fa3;
display: flex;
justify-content: space-evenly;
align-items: center;

img{
  height: 5vh;
}

ul{
  list-style: none;
  display: flex;
  align-items: center;
}

li{
  margin-right: 2vh;
}

a{
  text-decoration: none;
  color: white;
}

a:hover,
.active{
  color: white;
}

p {
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.2s;
}

p:hover{
  transform: scale(1.1);
  transition: all 0.3s ease-in-out 0.1s;
  border-bottom: white 1px solid;
  line-height: 25px;
}
`;
 
export default Navbar;