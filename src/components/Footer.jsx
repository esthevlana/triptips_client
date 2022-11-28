import React from 'react'
import { Link } from 'react-router-dom';
import Twitter from '../assets/twitterlogo.png'
import Instagram from '../assets/instalogo.png'

function Footer() {
  return (
    <footer>
        <p>Follow us:</p>
        <Link to="/">
            <img src={Twitter} />
        </Link>
        <Link to="/">
            <img src={Instagram} />
        </Link>
    </footer>
  )
}

export default Footer