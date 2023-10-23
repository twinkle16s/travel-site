import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
 
interface NavItems {
  title:string;
  url:String;
}
const navItems: NavItems[] = [
  {
    title: "Home",
    url: '/',
  },
  {
    title: "About",
    url: '/about',
  },
  {
    title: "Services",
    url: '/services',
  },
  {
    title: "Product",
    url: '/product',
  }
];

const Navbar:React.FC = () => {
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
              <Link to="/" className="list">
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
                <Link to="/" className="list-name">
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