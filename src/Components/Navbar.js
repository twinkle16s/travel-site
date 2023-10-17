import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
;

const navItems = [
  {
    title: "Home",
    url: '/',
  },
  {
    title: "About",
    url: '/about',
  },
  {
    title: "Service",
    url: '/service',
  },
  {
    title: "Product",
    url: '/product',
  }
];

function Navbar(){
  const [click, setClick] = useState(false);

  return (
    <header className="container">
     <div>
        <Link to='/' className="logo">
          TRVL<i className="fab fa-typo3" />
        </Link>
      </div>
        <nav className="navbar">
        <ul className="menu-list">
          {navItems.map((navItem,index) => (
            <li className="list-item" key={index}>
              <Link to={navItem.url} className="list">
                {navItem.title}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
      <nav className="nav-container">
        <div className="icon" onClick={() => { setClick(!click) }}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-list"} />
        </div>
        {click && (
         
            <ul className="menu">
            {navItems.map((navItem, index) => (
              <li className="item" key={index} onClick={() => { setClick(!click) }}>
                <Link to={navItem.url} className="list-name">
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
         
          
        )}
      </nav>
    </header>
  );
}

export default Navbar;
