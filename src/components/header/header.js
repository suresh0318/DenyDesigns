import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex-box">
      <div className="links">
        <Link to="/" className="logo">
          DenyDesigns.
        </Link>
        <Link to="/Cards" className="link-product"><h3>PRODUCTS</h3></Link>
        
        <h3>COLLECTIONS</h3>
        <h3>OUR STORY</h3>
        <h3>ART</h3>
        <h3>WHOLESALE</h3>
      </div>
      <div className="icons">
        <AiOutlineSearch className="icon" />
        <Link to="/login">
          <AiOutlineUser className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
