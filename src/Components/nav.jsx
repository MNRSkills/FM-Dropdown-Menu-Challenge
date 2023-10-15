import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  //state for navbar dropdowns coming from App.jsx -----//

  return (
    <nav className="bg-mediumGray h-screen m-0 relative flex justify-between">
      <div>
        <img src="./assets/images/logo" alt="Logo" />
      </div>
      <div>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul className=" absolute top-10 bottom-0">
        <li className="flex content-center justify-center relative">
          <h2>Features</h2> <FontAwesomeIcon icon={faChevronDown} />
          <ul className="absolute hidden">
            <li> Todo List</li>
            <li> Calendar</li>
            <li> Reminder </li>
            <li> Planning </li>
          </ul>
        </li>
        <li>
          <h2>Company</h2>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>
          <h2>Careers</h2>
        </li>
        <li>
          <h2>About</h2>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
