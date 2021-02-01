import "./HeaderMobile.css";

import razorbackFace from "../../Images/razorbackLogoFace.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../assets/stateProvider";
import { auth } from "../../assets/firebase";

export default function Header() {
  const [{ userData }, dispatch] = useStateValue();
  const [isActive, setActive] = useState(true);

  const handleAuthentication = (e) => {
    if (userData) {
      auth
        .signOut()
        .then(() => {
          dispatch({
            type: "SET_USER",
            user: [],
            userData: null,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // console.log(userData.map(user => user.displayName))
  return (
    <div className="header">
      <div className="header__top">
        <Link className="header__links" to="/">
          <p className="header__p">HOME</p>
        </Link>
        <Link to="/About" className="header__links">
          <p className="header__p">ABOUT</p>
        </Link>

        <Link to="/Contact" className="header__links">
          <p className="header__p">CONTACT</p>
        </Link>
        <div>
          <Link to="/Login" className="header__links">
            <p className="header__p">RZB Nation</p>
          </Link>
          <Link to={!userData ? "/login" : "/"} className="header__links">
            <div onClick={handleAuthentication} className="header__option">
              <p className="header__optionLineOne">
                Hello,{" "}
                {!userData ? "Guest" : userData.map((user) => user.displayName)}
              </p>
              <p className="header__optionLineTwo">
                {!userData ? "Sign In" : "Sign Out"}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        <Link to="/" className="header__image">
          <img src={razorbackFace} alt="Razorback Image" />
        </Link>
      </div>
    </div>
  );
}
