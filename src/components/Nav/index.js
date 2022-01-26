import React from 'react';
import { NavLink } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  

  return (
    <header className="nav-bar">
     
      <h3>
          Hector Perez
        </h3>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink exact to='/' activeClassName="active">Home</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/work' activeClassName="active">Work</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/about' activeClassName="active">About</NavLink>
          </li>
          <li className="mx-2">
          <NavLink exact to='/contact' activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;