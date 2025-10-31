import React from "react";
import {Link}  from "react-router-dom";
import './Nav.css'
import Logo from '../image/image.png'

function Nav(){
    return(
        <div className="sidebar">
            <img src={Logo} alt="logo" />
            <div className="nav_box">
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/menu'>Menu</Link>
              <Link to='/contact'>Contact</Link>
            </nav>
        </div>
        </div>
    );
}
export default Nav;
