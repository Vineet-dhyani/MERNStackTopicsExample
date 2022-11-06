import React from 'react'
import {NavLink} from "react-router-dom"
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <a href='#'>Logo</a>
      <li><NavLink to="/Home">Home</NavLink></li>
      <li><NavLink to="/About"> About</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      </div>
  )
}

export default NavBar
