import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header-wrapper">
      <ul className="header-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sessions">Decoupled</Link></li>
        <li><Link to="/news">Progressive D</Link></li>
      </ul>
      <div className="header-banner"></div>
    </div>
  )
}


export default Header;
