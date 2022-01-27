import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className='homelink' to='/'><span role='img' aria-label='home'>🏠</span></Link>
    </nav>
  );
};

export default Navbar;