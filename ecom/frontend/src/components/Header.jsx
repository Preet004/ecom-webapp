
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

function Header() {
  return (
    <header>
      <div className="brand">
        <Link to="/">Ecommerce</Link>
      </div>
      <SearchBox />
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
