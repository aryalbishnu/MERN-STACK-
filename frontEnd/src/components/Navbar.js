import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
import { UserContext } from '../App';
const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const MenuList = ()=>{
    if (state) {
      return (
        <>
          <li className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/" onClick={() => handleLinkClick('/')}>Home</Link>
          </li>
          <li className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>
            <Link className="nav-link" to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
          </li>
          <li className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
          </li>
          <li className={`nav-link ${activeLink === '/signup' ? 'active' : ''}`}>
            <Link className="nav-link" to="/logout" onClick={() => handleLinkClick('/logout')}>Logout</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/" onClick={() => handleLinkClick('/')}>Home</Link>
          </li>
          <li className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>
            <Link className="nav-link" to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
          </li>
          <li className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
          </li>
          <li className={`nav-link ${activeLink === '/login' ? 'active' : ''}`}>
            <Link className="nav-link" to="/login" onClick={() => handleLinkClick('/login')}>Login</Link>
          </li>
          <li className={`nav-link ${activeLink === '/signup' ? 'active' : ''}`}>
            <Link className="nav-link" to="/signup" onClick={() => handleLinkClick('/signup')}>Register</Link>
          </li>
        </>
      )
    }
  }

  return (
    <>
      <div className="containter-fluid main_menu">
        <div>
            <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                <img src = {logo}  alt='logo'/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <MenuList />
                      </ul>               
                    </div>
                  </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar