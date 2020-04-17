import React from 'react';
import NavBar from '../NavBar';
import './index.scss';

const Header = () => (
  <header>
    <img className="logo" alt="Logo" width="18" src="/favicon.ico" />
    <NavBar />
  </header>
);

export default Header;
