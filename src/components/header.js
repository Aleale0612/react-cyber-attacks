import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header-custom text-white text-center py-4">
      <img src={logo} alt="Logo" width="150" />
      <h1>Dezasters Web</h1>
    </header>
  );
};

export default Header;
