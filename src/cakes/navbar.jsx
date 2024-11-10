import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <div id="nav">
           <li className="logo"><Link to="/">Euphoria Cakes</Link></li>
          <li className="nav"><Link to="/">Home</Link></li> 
          <li><Link to="/cakes">Cakes</Link></li> 
          <li><Link to="/categories">Categories</Link></li> 
          <li><Link to="/cart">Cart</Link></li> 
          <li><Link to="/about">About Us</Link></li>
        </div>
      </ul>
    </div>
  );
}
