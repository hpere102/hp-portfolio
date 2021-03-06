import React from 'react';
import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap-icons/font/bootstrap-icons.css";


function Nav(props) {
  

  return (
    <header className="nav-bar">
     
      <p class="header-name">
          Hector Perez
        </p>
        

      
      <nav>
        <ul className="flex-row">

        
        <NavLink exact to='/' activeClassName="active" className="nav-links">
        <li className="mx-2">
          <i class="bi-house-door"></i>
                 Home
          </li>
        </NavLink>

        <NavLink exact to='/work' activeClassName="active" className="nav-links">
        <li className="mx-2">
          <i class="bi-file-earmark-code"></i>
                   Work 
          </li>
        </NavLink>
          
        <NavLink exact to='/about' activeClassName="active" className="nav-links">
        <li className="mx-2">
          <i class="bi-card-list"></i>
                    About
          </li>
        </NavLink>

        <NavLink exact to='/resume' activeClassName="active" className="nav-links">
        <li className="mx-2">
          <i class="bi-file-earmark-arrow-down"></i>
                    Resume
          </li>
        </NavLink> 

        <div class="vr"></div>
        
        
          
        <NavLink exact to='/contact' activeClassName="active" className="nav-links">
        <li className="mx-2">
          <i class="bi-person"></i>
                    Contact
          </li>
        </NavLink> 

        

        
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;