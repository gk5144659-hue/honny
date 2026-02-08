import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar({cartCount}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">
        <img src={logo} className="logo-img" alt="" />
      </h3>
      
      <div className="search-box">
         <input type="text" placeholder="Search..." />
      </div>

    <div className="cart">
       🛒 <span>{cartCount}</span>
    </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/service" onClick={() => setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
