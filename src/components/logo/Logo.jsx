import React from 'react';
import './Logo.css';
import logo from '../../Images/logo-removebg-preview.png';

const Logo = () => {
  return (
    <div className='logo hoverable'>
      <img src={logo} alt="logo" />
      <span>Reddit clone</span>
    </div>
  )
}

export default Logo
