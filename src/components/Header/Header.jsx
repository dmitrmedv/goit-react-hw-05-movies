import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerStyles.css';

const Header = () => {
  return (
    <div className="header container">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="movies" className="link">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
