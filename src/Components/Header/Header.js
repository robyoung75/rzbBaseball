import "./Header.css";

import razorbackFace from "../../Images/razorbackLogoFace.png";

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../assets/stateProvider";
import { auth } from "../../assets/firebase";

export default function Header() {
  const [{ userData, user }, dispatch] = useStateValue();
  //  console.log('I AM USER_DATA STATE', userData)
  // const email = userData.map(obj => obj.email)
  //  console.log('EMAIL', email)

  const handleAuthentication = (e) => {
   
    if (user) {
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

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__links">
          <p className="header__p">HOME</p>
        </Link>
        <Link to="/About" className="header__links">
          <p className="header__p">ABOUT</p>
        </Link>
      </div>

      <div className="header__center">
        <Link to="/" className="header__image">
          <img src={razorbackFace} alt="Razorback Image" />
        </Link>
      </div>

      <div className="header__right">
        <Link to="/Contact" className="header__links">
          <p className="header__p">CONTACT</p>
        </Link>
        <Link to="/Login" className="header__links">
          <p className="header__p">RZB Nation</p>
        </Link>
        <div className="header__links">
          <Link to={!user ? "/login" : "/"} style={{ textDecoration: "none" }}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {!user ? "Guest" : user}
              </span>
              <span className="header__optionLineTwo">
                {!user ? "Sign In" : "Sign Out"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
