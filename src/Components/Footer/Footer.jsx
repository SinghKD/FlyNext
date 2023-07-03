import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import flightLogo from "../../assets/flight-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img className="Logo" src={flightLogo} />
          </div>
          <p>Pictures never do a place justice. Fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Check-In</a>
          </li>
          <li>
            <a href="">Manage Your Booking</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our Communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Other</span>
          <li>
            <a href="">Chauffeur Service</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Popular Destinations</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation Modes</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>

      </div>

      <div className="copyRightDiv">
        <p> Developed By <a href="https://kdsingh.space">Karan</a> | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
