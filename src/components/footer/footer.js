import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-card">
      <div className="1">
        <h2>COMPANY</h2>
        <h3>shipping</h3>
        <h3>Return Policy</h3>
        <h3>Work With Us</h3>
        <h3>Terms & Conditions</h3>
      </div>
      <div className="2">
        <h2>FOLLOW US OUT THERE</h2>
        <h3>
          <AiOutlineFacebook />
          Facebook
        </h3>
        <h3>
          <AiOutlineTwitter />
          Twitter
        </h3>
        <h3>
          <AiOutlineInstagram />
          Instagram
        </h3>
        <h3>
          <AiOutlineFacebook />
          Facebook
        </h3>
      </div>
      <div className="3">
        <h2>THANK YOU</h2>
        <h3 className="lorem-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ut
          quasi quia itaque sunt adipisci, tempore blanditiis ab corrupti
          quibusdam repellendus quisquam! Odit ipsam optio, suscipit debitis at
          aut nobis.
        </h3>
      </div>
      <div className="4">
        <h2>NEWS LETTER</h2>
        <div class="form-group">
          <input
            className="form-field"
            type="email"
            placeholder="your@email.com"
          />
          <span>SUBSCRIBE</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
