import React from 'react';
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  

  return (
    <header className="flex-row px-1">
     
      <h3>
          Hector Perez
        </h3>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="mx-2">
          <Link to='/work'>Work</Link>
          </li>
          <li className="mx-2">
          <Link to='/about'>About</Link>
          </li>
          <li className="mx-2">
          <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;