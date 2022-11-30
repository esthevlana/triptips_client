import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <StyledFooter>
        <p>Follow us:</p>
        <Link to="/">
            <p><BsTwitter /></p>
        </Link>
        <Link to="/">
            <p><BsInstagram /></p>
        </Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  height: 5vh;
  background-color: #676fa3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  p{
    color: white;
    margin-left: 1vh;
    margin-right: 1vh;
  }

  img{
    width: 1.7vw;
    height: 3.5vh;
    margin: 0px 6px
  }
`;

export default Footer