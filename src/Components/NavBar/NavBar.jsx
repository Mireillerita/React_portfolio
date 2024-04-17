import React from 'react';
import './NavBar.css'

import {FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='photo' src='/myImage.jpg'/>
      
      <ul className='nav-menu'>
       <li>Home</li>
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        </ul>
        <div className='nav-connect'>
        Connect with me
        </div>

    </div>
  )
}
export default NavBar