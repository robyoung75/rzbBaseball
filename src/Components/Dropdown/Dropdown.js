import React, { useState } from "react";
import "./DropdownMobile.css";
import RZBLogo from '../../Images/razorbackLogoFace.png'

function Dropdown() {
  const [isActive, setActive] = useState(true);

  const handleSetActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };
  return (
    <div className={!isActive ? "dropdown" : "dropdown__active"}>
      <h1>RZB Baseball</h1>
      <img src={RZBLogo} alt="RazorBack Logo" onClick={handleSetActive}></img>
      <h1>Welcome</h1>
    </div>
  );
}

export default Dropdown;
