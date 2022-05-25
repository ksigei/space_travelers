import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/planet.png';
import './css/Header.css';

function Header() {
  return (
    <nav className="navbox">
      <Link className="icon" to="/">
        <img src={logoUrl} alt="planet" />
        <h2>Space Travelers Hub</h2>
      </Link>
      <div className="rightside">
        <NavLink to="/" className="link">Rockets</NavLink>
        <NavLink to="/missions" className="link">Missions</NavLink>
        <NavLink to="/profile" className="link">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Header;
