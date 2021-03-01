import React  from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
import web from '../My react web/logo.png'

const Navbar =()=>{
    return (
        <>
         <nav>
    <div className="nav-wrapper">
     <NavLink to="/" className="brand-logo"><img src={web} alt='logo' width='77px' height='63px'/></NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink exact activeClassName='menu_active' href="sass.html" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='menu_active' href="badges.html" to='/contact'>Contact Us </NavLink></li>
        <li><NavLink activeClassName='menu_active' href="badges.html" to='/about'>About Us </NavLink></li>
        <li><NavLink activeClassName='menu_active' href="collapsible.html" to='/login'>Login</NavLink></li>
      </ul>
    </div>
  </nav>
        </>
    )
}

export default Navbar;