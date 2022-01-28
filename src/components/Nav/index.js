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
            <i class="bi-house-door"></i>
          </li>
          <li className="mx-2">
          <NavLink exact to='/work' activeClassName="active" className="nav-links">Work</NavLink>
          <i class="bi-file-earmark-code"></i>
          </li>
          <li className="mx-2">
          <NavLink exact to='/about' activeClassName="active" className="nav-links">About</NavLink>
          <i class="bi-card-list"></i>
          </li>
          <li className="mx-2">
          <NavLink exact to='/contact' activeClassName="active" className="nav-links">Contact</NavLink>
          <i class="bi-person-lines-fill"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;