import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <NavLink className='navbar-brand' to="/">ACER</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <NavLink className='nav-link' to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className='nav-link' to="/reviews">Reviews</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className='nav-link' to="/blog">Blog</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;