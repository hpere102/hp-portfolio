import React from 'react';
import { NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap-icons/font/bootstrap-icons.css";


function Nav(props) {
  

  return (
    <header className="nav-bar">
     
      <p class="header-name">
          Hector Perez
          <i class="bi-geo-fill"></i>
        </p>
        

      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink exact to='/' activeClassName="active" className="nav-links">Home</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/work' activeClassName="active" className="nav-links">Work</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/about' activeClassName="active" className="nav-links">About</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/contact' activeClassName="active" className="nav-links">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;