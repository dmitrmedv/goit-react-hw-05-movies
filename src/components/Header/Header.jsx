import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="movies" className={css.link}>
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
