import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/planet.png';
import './css/Header.css';

function Header() {
  return (
    <nav>
      <Link className="icon" to="/">
        <img src={logoUrl} alt="planet" />
      </Link>
      <Link to="/missions">Missions</Link>

    </nav>
  );
}

export default Header;
