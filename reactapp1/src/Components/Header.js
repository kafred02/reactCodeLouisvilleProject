import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">React Project</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/API">API</NavLink></li>
      <li><NavLink to="/PokeAPI">And more!</NavLink></li>
    </ul>    
  </header>
);

export default Header;