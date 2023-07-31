import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import bg from './bg.jpg';
import './navbar.css';
import logo from "../images/Logo_.png"

const Navbar = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  useEffect(() => {
    if (theme !== 'dark') {
      document.body.style.background = `url(${bg}) `;
      // document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme === 'dark' ? 'dark' : 'light'} flex justify-center`} style={{ backgroundColor: theme === "dark" ? "#333" : "white" }}>

        <div className="container-fluid">

          <div className='ms-2'>
            <Link exact to="/">
              <img src={logo} alt="logo" style={{ width: "15%" }} />
            </Link>
          </div>

          <button
            className="navbar-toggler absolute top-3 right-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse visible mt-3 -ms-4" id="navbarNav">

            <div className="navbar-nav w-full ms-11 flex justify-around" >
              <div className="nav-item">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/">
                  Home
                </Link>
              
              </div>
              <div className="nav-item">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/about">
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/contact-us">
                  Contact Us
                </Link>
              </div>
              <div className="mb-3">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/feedback">
                  Feedback
                </Link>
              </div>
              <div className="switch -ms-12 pt-2 mb-4">
                <Switch
                  checked={theme === 'dark'}
                  onChange={() => toggleTheme(theme)}
                  onColor="#2C3245"
                  offColor="#E1E2E2"
                  onHandleColor="#fff"
                  handleDiameter={10}
                  uncheckedIcon="🔆"
                  checkedIcon="🌙"
                  height={25}
                  width={57}
                  className="theme-toggle-switch px-5"
                />
              </div>

            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;