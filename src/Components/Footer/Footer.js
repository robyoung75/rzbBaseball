import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// import razorbackFace from "../../Images/razorbackLogoFace.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <Link className="footer__link" to="/">
          <p>HOME</p>
        </Link>
        <Link className="footer__link" to="/About">
          <p>ABOUT</p>
        </Link>
        {/* <Link className="footer__link" to="/" className="footer__image">
        <img src={razorbackFace} />
      </Link> */}
        <Link className="footer__link" to="/Contact">
          <p>CONTACT</p>
        </Link>
        <Link className="footer__link" to="/Login">
          <p>RZB Nation</p>
        </Link>
      </div>
      <div className="footer__social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <p>© Razorbacks 2020</p>
      <p>Design by: Rob Young, ryoug75@gmail.com</p>
    </div>
  );
}

export default Footer;
