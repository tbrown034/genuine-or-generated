import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="flex justify-between p-4 text-lg">
      <h1>Genuine or Not</h1>
      <div className="flex gap-4 ">
        <p>Game Modes</p>
        <p>Daily Challenge</p>
        <p>About</p>
      </div>
      <FontAwesomeIcon icon={faBars} className="h-6" />
    </nav>
  );
};

export default Header;
