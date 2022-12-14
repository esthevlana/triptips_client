import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import styled from "styled-components";
import logo from "../assets/planelogo.png";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <>
      {loggedIn && (
        <StyleNavBar className="Navbar">
          <Link to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>
            <img src={logo} alt="logo home" />
          </Link>
          <Link to="/addarticle" className={({ isActive }) => (isActive ? 'selected' : '')}>How was your trip?</Link>
          <Link to="/">Explore the world</Link>{" "}
          <Link to={`/profile/${user._id}`}>Profile</Link>
          {/* procurar como fazer um menu dropdown linkando à base de dados */}
          <button onClick={logout}>Logout</button>
        </StyleNavBar>
      )}

      {!loggedIn && (
        <>
          {/*           <Link to="/signup">
            <p>Signup</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link> */}
        </>
      )}
    </>
  );
}

const StyleNavBar = styled.nav`
  height: 7vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 7vh;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 2vh;
  }
  a {
    text-decoration: none;
    color: white;
    transform: scale(1);
    transition: all 0.3s ease-in-out 0.2s;
  }
  a:hover,
  .active {
    color: white;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out 0.1s;
    border-bottom: white 1px solid;
    line-height: 25px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    padding: 5px;
    transform: scale(1);
    transition: all 0.3s ease-in-out 0.2s;
  }

  button:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out 0.1s;
  }
`;

export default Navbar;
