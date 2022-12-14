import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../assets/startvideo.mp4";
import styled from "styled-components";

function Start() {
  return (
    <StyledDivbg>
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted />
      <div>
        <h1>Trip Tips</h1>
        <p>Join our community to plan your next trip</p>
        <div className="buttonflexbox">
          <section>
            <Link to="/signup">Sign up</Link>
          </section>
          <section>
            <Link to="/login">Login</Link>
          </section>
        </div>
      </div>
    </StyledDivbg>
  );
}

const StyledDivbg = styled.div`
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 400%;
    font-family: "Lobster", cursive;
    letter-spacing: 0.2em;
    margin-top: 80px;
  }

  p {
    font-size: 150%;
    margin: 2em;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
  }

  div a {
    color: white;
    text-decoration: none;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  section {
    background-color: rgba(1, 1, 1, 0.6);
    margin: 10px;
    padding: 10px;
    font-size: 2em;
    transform: scale(1);
    transition: all 0.3s ease-in-out 0.2s;
  }

  section:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out 0.1s;
  }

  .buttonflexbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }
`;

export default Start;
