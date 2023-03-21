import React from 'react';
import './Navbar.css';
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/Searchbar';
import Action from '../actions/Action';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <Searchbar />
      <Action />
    </div>
  )
}

export default Navbar;
